import { lineOfDurin } from "./dwarves";
import { hobbitFamilies } from "./hobbits";
import { houseOfFinwe } from "./house-of-finwe";
import { lineOfKings } from "./line-of-kings";
import type { Character, FamilyTree } from "./types";

export const allFamilyTrees: FamilyTree[] = [
    houseOfFinwe,
    lineOfKings,
    lineOfDurin,
    hobbitFamilies,
];

export const allCharacters: Character[] = allFamilyTrees.flatMap(
    (t) => t.characters,
);

export { RACE_COLORS, RACE_LABELS } from "./types";
export type { Character, FamilyTree } from "./types";
