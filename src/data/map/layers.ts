import type { MapLayer } from "./types";

export const mapLayers: MapLayer[] = [
    {
        id: "first-age",
        name: "First Age (Beleriand)",
        imagePath: "/maps/first-age-beleriand.jpg",
        bounds: [
            [0, 0],
            [1000, 1500],
        ],
    },
    {
        id: "third-age",
        name: "Third Age (Middle-earth)",
        imagePath: "/maps/second-third-age.jpg",
        bounds: [
            [0, 0],
            [1000, 1500],
        ],
    },
];
