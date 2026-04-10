import type { MapLocation } from "../../../data/map/types";
import { CATEGORY_LABELS } from "../../../data/map/types";

interface Props {
    location: MapLocation;
}

export function LocationPopup({ location }: Props) {
    return (
        <div className="max-w-xs font-sans">
            <div className="mb-1 text-xs font-semibold tracking-wider text-[#7a6025] uppercase">
                {CATEGORY_LABELS[location.category]}
            </div>
            <h3 className="mb-1 text-base font-bold text-[#1a1209]">
                {location.name}
            </h3>
            <p className="mb-2 text-sm leading-relaxed text-[#4a3a20]">
                {location.description}
            </p>
            {location.relatedCharacters &&
                location.relatedCharacters.length > 0 && (
                    <div className="text-xs text-[#6b5d48]">
                        <strong>Characters:</strong>{" "}
                        {location.relatedCharacters.join(", ")}
                    </div>
                )}
        </div>
    );
}
