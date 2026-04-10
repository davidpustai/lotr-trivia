export type Age =
    | "before-time"
    | "years-of-lamps"
    | "years-of-trees"
    | "first-age"
    | "second-age"
    | "third-age"
    | "fourth-age";

export type EventTag =
    | "creation"
    | "war"
    | "ring"
    | "kingdom"
    | "alliance"
    | "tragedy"
    | "quest"
    | "artifact"
    | "divine"
    | "corruption";

export type Significance = 1 | 2 | 3; // 1=minor, 2=notable, 3=critical

export interface TimelineEvent {
    id: string;
    age: Age;
    year?: string; // e.g. "YT 1050", "SA 3441", "TA 3019"
    title: string;
    summary: string;
    details?: string;
    tags: EventTag[];
    significance: Significance;
    relatedCharacters?: string[];
    relatedLocations?: string[];
}

export const AGE_LABELS: Record<Age, string> = {
    "before-time": "Before Time",
    "years-of-lamps": "Years of the Lamps",
    "years-of-trees": "Years of the Trees",
    "first-age": "First Age",
    "second-age": "Second Age",
    "third-age": "Third Age",
    "fourth-age": "Fourth Age",
};

export const AGE_ORDER: Age[] = [
    "before-time",
    "years-of-lamps",
    "years-of-trees",
    "first-age",
    "second-age",
    "third-age",
    "fourth-age",
];

export const TAG_LABELS: Record<EventTag, string> = {
    creation: "Creation",
    war: "War & Battle",
    ring: "Rings of Power",
    kingdom: "Kingdom",
    alliance: "Alliance",
    tragedy: "Tragedy",
    quest: "Quest",
    artifact: "Artifact",
    divine: "Divine",
    corruption: "Corruption",
};
