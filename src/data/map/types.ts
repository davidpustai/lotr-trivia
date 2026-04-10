export type MapEra = "first-age" | "third-age";

export type LocationCategory =
    | "battle"
    | "fortress"
    | "city"
    | "forest"
    | "mountain"
    | "river"
    | "realm"
    | "ruins"
    | "sacred";

export interface MapLocation {
    id: string;
    name: string;
    era: MapEra;
    category: LocationCategory;
    coords: [number, number]; // [y, x] for CRS.Simple (latitude, longitude)
    description: string;
    depth: number;
    relatedEvents?: string[];
    relatedCharacters?: string[];
}

export interface MapLayer {
    id: MapEra;
    name: string;
    imagePath: string;
    bounds: [[number, number], [number, number]]; // [[south, west], [north, east]]
}

export const CATEGORY_ICONS: Record<LocationCategory, string> = {
    battle: "Swords",
    fortress: "Castle",
    city: "Building2",
    forest: "TreePine",
    mountain: "Mountain",
    river: "Waves",
    realm: "Crown",
    ruins: "Landmark",
    sacred: "Sparkles",
};

export const CATEGORY_LABELS: Record<LocationCategory, string> = {
    battle: "Battles",
    fortress: "Fortresses",
    city: "Cities",
    forest: "Forests",
    mountain: "Mountains",
    river: "Rivers & Lakes",
    realm: "Realms",
    ruins: "Ruins",
    sacred: "Sacred Places",
};

export const DEPTH_LABELS: Record<number, string> = {
    1: "Essential",
    2: "Extended",
};

export const ERA_LABELS: Record<MapEra, string> = {
    "first-age": "First Age (Beleriand)",
    "third-age": "Third Age (Middle-earth)",
};
