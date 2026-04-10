import { hierarchy, tree } from "d3-hierarchy";
import type { Character } from "../data/genealogy/types";

export interface TreeNode {
    character: Character;
    x: number;
    y: number;
    spouseX?: number;
}

export interface MarriageLink {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

export interface ChildLink {
    parentX: number;
    parentY: number;
    childX: number;
    childY: number;
    fromMarriage?: boolean;
    marriageMidX?: number;
}

interface HierarchyNode {
    id: string;
    children?: HierarchyNode[];
}

const NODE_WIDTH = 160;
const NODE_HEIGHT = 80;
const LEVEL_HEIGHT = 140;
const SPOUSE_GAP = 180;

export function computeTreeLayout(
    characters: Character[],
    rootIds: string[],
): {
    nodes: TreeNode[];
    marriageLinks: MarriageLink[];
    childLinks: ChildLink[];
    width: number;
    height: number;
} {
    const charMap = new Map(characters.map((c) => [c.id, c]));
    const nodes: TreeNode[] = [];
    const marriageLinks: MarriageLink[] = [];
    const childLinks: ChildLink[] = [];

    function buildHierarchy(
        id: string,
        visited: Set<string>,
    ): HierarchyNode | null {
        if (visited.has(id)) return null;
        visited.add(id);
        const char = charMap.get(id);
        if (!char) return null;

        const children: HierarchyNode[] = [];
        for (const childId of char.childrenIds ?? []) {
            const child = buildHierarchy(childId, visited);
            if (child) children.push(child);
        }

        return { id, children: children.length > 0 ? children : undefined };
    }

    const visited = new Set<string>();
    const roots: HierarchyNode[] = [];
    for (const rootId of rootIds) {
        const root = buildHierarchy(rootId, visited);
        if (root) roots.push(root);
    }

    const superRoot: HierarchyNode = { id: "__root__", children: roots };
    const root = hierarchy(superRoot);

    const treeLayout = tree<HierarchyNode>()
        .nodeSize([NODE_WIDTH + 40, LEVEL_HEIGHT])
        .separation((a, b) => (a.parent === b.parent ? 1 : 1.5));

    treeLayout(root);

    let minX = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    root.descendants().forEach((d) => {
        if (d.data.id === "__root__") return;
        const x = d.x ?? 0;
        const y = (d.depth - 1) * LEVEL_HEIGHT;
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);

        const char = charMap.get(d.data.id);
        if (!char) return;

        const node: TreeNode = { character: char, x, y };

        // Position spouse
        if (char.spouseIds?.length) {
            const spouse = charMap.get(char.spouseIds[0]);
            if (spouse && !nodes.find((n) => n.character.id === spouse.id)) {
                node.spouseX = x + SPOUSE_GAP;
                maxX = Math.max(maxX, x + SPOUSE_GAP);
                nodes.push({
                    character: spouse,
                    x: x + SPOUSE_GAP,
                    y,
                });
                marriageLinks.push({
                    x1: x + NODE_WIDTH / 2,
                    y1: y + NODE_HEIGHT / 2,
                    x2: x + SPOUSE_GAP - NODE_WIDTH / 2,
                    y2: y + NODE_HEIGHT / 2,
                });
            }
        }

        nodes.push(node);
    });

    // Build child links
    root.descendants().forEach((d) => {
        if (d.data.id === "__root__") return;
        const char = charMap.get(d.data.id);
        if (!char?.childrenIds?.length) return;

        const parentX = d.x ?? 0;
        const parentY = (d.depth - 1) * LEVEL_HEIGHT;
        const hasSpouse = char.spouseIds?.length;
        const midX = hasSpouse ? parentX + SPOUSE_GAP / 2 : parentX;

        for (const childId of char.childrenIds) {
            const childNode = nodes.find((n) => n.character.id === childId);
            if (childNode) {
                childLinks.push({
                    parentX: midX,
                    parentY: parentY + NODE_HEIGHT,
                    childX: childNode.x,
                    childY: childNode.y,
                    fromMarriage: !!hasSpouse,
                    marriageMidX: hasSpouse ? midX : undefined,
                });
            }
        }
    });

    const offsetX = -minX + NODE_WIDTH;
    nodes.forEach((n) => {
        n.x += offsetX;
    });
    marriageLinks.forEach((l) => {
        l.x1 += offsetX;
        l.x2 += offsetX;
    });
    childLinks.forEach((l) => {
        l.parentX += offsetX;
        l.childX += offsetX;
        if (l.marriageMidX !== undefined) l.marriageMidX += offsetX;
    });

    return {
        nodes,
        marriageLinks,
        childLinks,
        width: maxX - minX + NODE_WIDTH * 3,
        height: maxY + LEVEL_HEIGHT + NODE_HEIGHT,
    };
}
