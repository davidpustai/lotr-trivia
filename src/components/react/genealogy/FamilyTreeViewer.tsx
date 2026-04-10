import { select } from "d3-selection";
import { zoom, zoomIdentity, type D3ZoomEvent } from "d3-zoom";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Character, FamilyTree } from "../../../data/genealogy/types";
import { computeTreeLayout } from "../../../utils/tree-layout";
import { CharacterModal } from "./CharacterModal";
import { TreeNode } from "./TreeNode";

interface Props {
    trees: FamilyTree[];
}

export function FamilyTreeViewer({ trees }: Props) {
    const [selectedTree, setSelectedTree] = useState(0);
    const [selectedCharacter, setSelectedCharacter] =
        useState<Character | null>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const gRef = useRef<SVGGElement>(null);

    const tree = trees[selectedTree];

    const layout = useMemo(
        () => computeTreeLayout(tree.characters, tree.rootCharacterIds),
        [tree],
    );

    // Pan/zoom
    useEffect(() => {
        const svg = svgRef.current;
        const g = gRef.current;
        if (!svg || !g) return;

        const zoomBehavior = zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.2, 3])
            .on("zoom", (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
                g.setAttribute("transform", event.transform.toString());
            });

        const selection = select(svg);
        selection.call(zoomBehavior);

        // Initial centering — set transform directly to avoid needing d3-transition
        const svgRect = svg.getBoundingClientRect();
        const scale =
            Math.min(
                svgRect.width / layout.width,
                svgRect.height / layout.height,
                1,
            ) * 0.9;
        const tx = (svgRect.width - layout.width * scale) / 2;
        const ty = 20;
        const initialTransform = zoomIdentity.translate(tx, ty).scale(scale);
        g.setAttribute("transform", initialTransform.toString());
        // Sync zoom state without calling zoomBehavior.transform (which requires d3-transition)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (svg as any).__zoom = initialTransform;

        return () => {
            selection.on(".zoom", null);
        };
    }, [layout]);

    const handleNodeClick = useCallback((character: Character) => {
        setSelectedCharacter(character);
    }, []);

    return (
        <div>
            {/* Tree selector */}
            <div className="mb-4 flex flex-wrap gap-2">
                {trees.map((t, i) => (
                    <button
                        key={t.id}
                        onClick={() => setSelectedTree(i)}
                        className={`rounded-md px-4 py-2 text-base font-medium transition-colors ${
                            selectedTree === i
                                ? "bg-[var(--color-gold)] text-[var(--color-bg-primary)]"
                                : "border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:border-[var(--color-gold-dim)]"
                        }`}
                    >
                        {t.name}
                    </button>
                ))}
            </div>

            <p className="mb-4 text-base text-[var(--color-text-muted)]">
                {tree.description}
            </p>

            {/* SVG viewer */}
            <div
                className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)]"
                style={{ height: "70vh" }}
            >
                <svg
                    ref={svgRef}
                    width="100%"
                    height="100%"
                    className="cursor-grab active:cursor-grabbing"
                >
                    <g ref={gRef}>
                        {/* Marriage links */}
                        {layout.marriageLinks.map((link, i) => (
                            <line
                                key={`m-${i}`}
                                x1={link.x1}
                                y1={link.y1}
                                x2={link.x2}
                                y2={link.y2}
                                stroke="var(--color-gold-dim)"
                                strokeWidth={2}
                                strokeDasharray="6,3"
                            />
                        ))}

                        {/* Child links */}
                        {layout.childLinks.map((link, i) => (
                            <path
                                key={`c-${i}`}
                                d={`M ${link.parentX} ${link.parentY}
                    L ${link.parentX} ${(link.parentY + link.childY) / 2}
                    L ${link.childX} ${(link.parentY + link.childY) / 2}
                    L ${link.childX} ${link.childY}`}
                                fill="none"
                                stroke="var(--color-border-light)"
                                strokeWidth={1.5}
                            />
                        ))}

                        {/* Nodes */}
                        {layout.nodes.map((node) => (
                            <TreeNode
                                key={node.character.id}
                                character={node.character}
                                x={node.x}
                                y={node.y}
                                onClick={handleNodeClick}
                            />
                        ))}
                    </g>
                </svg>
            </div>

            <p className="mt-2 text-center text-sm text-[var(--color-text-muted)]">
                Scroll to zoom, drag to pan. Click a character for details.
            </p>

            {selectedCharacter && (
                <CharacterModal
                    character={selectedCharacter}
                    onClose={() => setSelectedCharacter(null)}
                />
            )}
        </div>
    );
}
