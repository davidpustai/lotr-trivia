import type { Character } from "../../../data/genealogy/types";
import { RACE_COLORS } from "../../../data/genealogy/types";

interface Props {
    character: Character;
    x: number;
    y: number;
    onClick: (character: Character) => void;
}

const NODE_WIDTH = 140;
const NODE_HEIGHT = 60;

export function TreeNode({ character, x, y, onClick }: Props) {
    const raceColor = RACE_COLORS[character.race];

    return (
        <g
            transform={`translate(${x - NODE_WIDTH / 2}, ${y})`}
            onClick={() => onClick(character)}
            className="cursor-pointer"
        >
            <rect
                width={NODE_WIDTH}
                height={NODE_HEIGHT}
                rx={8}
                fill="var(--color-bg-card)"
                stroke={raceColor}
                strokeWidth={2}
                className="transition-all hover:brightness-125"
            />
            <text
                x={NODE_WIDTH / 2}
                y={NODE_HEIGHT / 2 - 6}
                textAnchor="middle"
                fill="var(--color-text-primary)"
                fontSize={12}
                fontWeight={700}
                fontFamily="var(--font-serif)"
            >
                {character.name}
            </text>
            <text
                x={NODE_WIDTH / 2}
                y={NODE_HEIGHT / 2 + 12}
                textAnchor="middle"
                fill={raceColor}
                fontSize={10}
                fontFamily="var(--font-serif)"
            >
                {character.titles?.[0] ?? ""}
            </text>
        </g>
    );
}

export { NODE_HEIGHT, NODE_WIDTH };
