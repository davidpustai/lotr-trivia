import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Search } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import {
    ImageOverlay,
    MapContainer,
    Marker,
    Popup,
    useMap,
} from "react-leaflet";
import type {
    LocationCategory,
    MapEra,
    MapLayer,
    MapLocation,
} from "../../../data/map/types";
import { CATEGORY_LABELS, ERA_LABELS } from "../../../data/map/types";
import { LocationPopup } from "./LocationPopup";

// Category-based marker colors
const CATEGORY_COLORS: Record<LocationCategory, string> = {
    battle: "#dc2626",
    fortress: "#9333ea",
    city: "#c9a84c",
    forest: "#16a34a",
    mountain: "#78716c",
    river: "#2563eb",
    realm: "#c9a84c",
    ruins: "#a16207",
    sacred: "#e4c76b",
};

function createMarkerIcon(category: LocationCategory) {
    const color = CATEGORY_COLORS[category];
    return L.divIcon({
        className: "custom-marker",
        html: `<div style="width:12px;height:12px;border-radius:50%;background:${color};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
    });
}

function FlyToLocation({ coords }: { coords: [number, number] | null }) {
    const map = useMap();
    if (coords) {
        map.flyTo(coords, 4, { duration: 0.8 });
    }
    return null;
}

interface Props {
    layers: MapLayer[];
    locations: MapLocation[];
}

export function MiddleEarthMap({ layers, locations }: Props) {
    const [activeEra, setActiveEra] = useState<MapEra>("third-age");
    const [searchQuery, setSearchQuery] = useState("");
    const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null);
    const [activeCategories, setActiveCategories] = useState<
        Set<LocationCategory>
    >(new Set());

    const activeLayer = layers.find((l) => l.id === activeEra);
    const eraLocations = useMemo(
        () => locations.filter((loc) => loc.era === activeEra),
        [locations, activeEra],
    );

    const filteredLocations = useMemo(() => {
        let result = eraLocations;
        if (activeCategories.size > 0) {
            result = result.filter((loc) => activeCategories.has(loc.category));
        }
        return result;
    }, [eraLocations, activeCategories]);

    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const q = searchQuery.toLowerCase();
        return eraLocations.filter((loc) => loc.name.toLowerCase().includes(q));
    }, [eraLocations, searchQuery]);

    const toggleCategory = useCallback((cat: LocationCategory) => {
        setActiveCategories((prev) => {
            const next = new Set(prev);
            if (next.has(cat)) next.delete(cat);
            else next.add(cat);
            return next;
        });
    }, []);

    if (!activeLayer) return null;

    const bounds = L.latLngBounds(activeLayer.bounds[0], activeLayer.bounds[1]);

    return (
        <div className="space-y-4">
            {/* Controls */}
            <div className="flex flex-wrap items-start gap-4">
                {/* Era switcher */}
                <div className="flex gap-2">
                    {layers.map((layer) => (
                        <button
                            key={layer.id}
                            onClick={() => {
                                setActiveEra(layer.id);
                                setFlyTarget(null);
                            }}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                                activeEra === layer.id
                                    ? "bg-[var(--color-mithril)] text-[var(--color-bg-primary)]"
                                    : "border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:border-[var(--color-mithril)]"
                            }`}
                        >
                            {ERA_LABELS[layer.id]}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative min-w-[200px] flex-1">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
                    <input
                        type="text"
                        placeholder="Search locations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] py-2 pr-4 pl-10 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none focus:border-[var(--color-mithril)]"
                    />
                    {searchResults.length > 0 && (
                        <div className="absolute top-full right-0 left-0 z-50 mt-1 max-h-48 overflow-y-auto rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                            {searchResults.map((loc) => (
                                <button
                                    key={loc.id}
                                    onClick={() => {
                                        setFlyTarget(loc.coords);
                                        setSearchQuery("");
                                    }}
                                    className="block w-full px-3 py-2 text-left text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card)] hover:text-[var(--color-text-primary)]"
                                >
                                    {loc.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
                {(Object.keys(CATEGORY_LABELS) as LocationCategory[]).map(
                    (cat) => (
                        <button
                            key={cat}
                            onClick={() => toggleCategory(cat)}
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                                activeCategories.size === 0 ||
                                activeCategories.has(cat)
                                    ? "text-[var(--color-text-primary)]"
                                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                            }`}
                            style={{
                                backgroundColor:
                                    activeCategories.size === 0 ||
                                    activeCategories.has(cat)
                                        ? CATEGORY_COLORS[cat] + "33"
                                        : "var(--color-bg-card)",
                            }}
                        >
                            <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{
                                    backgroundColor: CATEGORY_COLORS[cat],
                                }}
                            />
                            {CATEGORY_LABELS[cat]}
                        </button>
                    ),
                )}
            </div>

            {/* Map */}
            <div
                className="overflow-hidden rounded-lg border border-[var(--color-border)]"
                style={{ height: "65vh" }}
            >
                <MapContainer
                    key={activeEra}
                    crs={L.CRS.Simple}
                    bounds={bounds}
                    maxBounds={bounds}
                    maxBoundsViscosity={1.0}
                    minZoom={-2}
                    maxZoom={4}
                    style={{
                        height: "100%",
                        width: "100%",
                        background: "#1a1209",
                    }}
                >
                    <ImageOverlay url={activeLayer.imagePath} bounds={bounds} />
                    <FlyToLocation coords={flyTarget} />
                    {filteredLocations.map((loc) => (
                        <Marker
                            key={loc.id}
                            position={loc.coords}
                            icon={createMarkerIcon(loc.category)}
                        >
                            <Popup>
                                <LocationPopup location={loc} />
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            <p className="text-center text-xs text-[var(--color-text-muted)]">
                {filteredLocations.length} location
                {filteredLocations.length !== 1 ? "s" : ""} shown. Add map
                images to <code>/public/maps/</code> for the overlay to display.
            </p>
        </div>
    );
}
