export type Race =
    | "valar"
    | "maiar"
    | "elves"
    | "humans"
    | "dwarves"
    | "hobbits"
    | "ents"
    | "half-elven";

export interface Character {
    id: string;
    name: string;
    otherNames?: string[];
    race: Race;
    birth?: string;
    death?: string;
    titles?: string[];
    bio: string;
    feats?: string[];
    quizFacts?: string[];
    parentIds?: string[];
    spouseIds?: string[];
    childrenIds?: string[];
    crossTreeLinks?: { targetId: string; treeId: string; label: string }[];
}

export interface FamilyTree {
    id: string;
    name: string;
    description: string;
    rootCharacterIds: string[];
    characters: Character[];
}

export const RACE_COLORS: Record<Race, string> = {
    valar: "var(--color-race-valar)",
    maiar: "var(--color-race-maiar)",
    elves: "var(--color-race-elves)",
    humans: "var(--color-race-humans)",
    dwarves: "var(--color-race-dwarves)",
    hobbits: "var(--color-race-hobbits)",
    ents: "#6b8a5a",
    "half-elven": "#9ab4a6",
};

export const RACE_LABELS: Record<Race, string> = {
    valar: "Valar",
    maiar: "Maiar",
    elves: "Elves",
    humans: "Humans",
    dwarves: "Dwarves",
    hobbits: "Hobbits",
    ents: "Ents",
    "half-elven": "Half-elven",
};
