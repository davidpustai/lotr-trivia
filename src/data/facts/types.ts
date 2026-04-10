export type FactCategory =
    | "lore"
    | "language"
    | "artifacts"
    | "creatures"
    | "film-production"
    | "cast-trivia"
    | "adaptation-differences"
    | "geography"
    | "culture";

export type FactSource =
    | "silmarillion"
    | "lotr"
    | "hobbit"
    | "unfinished-tales"
    | "pj-lotr"
    | "pj-hobbit"
    | "rings-of-power"
    | "general";

export interface Fact {
    id: string;
    title: string;
    content: string;
    category: FactCategory;
    sources: FactSource[];
    quizPotential: boolean;
    tags?: string[];
}

export const CATEGORY_LABELS: Record<FactCategory, string> = {
    lore: "Deep Lore",
    language: "Languages",
    artifacts: "Artifacts & Objects",
    creatures: "Creatures & Races",
    "film-production": "Film Production",
    "cast-trivia": "Cast Trivia",
    "adaptation-differences": "Book vs Film",
    geography: "Geography",
    culture: "Culture & Customs",
};

export const SOURCE_LABELS: Record<FactSource, string> = {
    silmarillion: "The Silmarillion",
    lotr: "The Lord of the Rings",
    hobbit: "The Hobbit",
    "unfinished-tales": "Unfinished Tales",
    "pj-lotr": "PJ LOTR Films",
    "pj-hobbit": "PJ Hobbit Films",
    "rings-of-power": "Rings of Power",
    general: "General Knowledge",
};
