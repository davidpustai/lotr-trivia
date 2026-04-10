import type { MapLocation } from "../../../data/map/types";
import { CATEGORY_LABELS } from "../../../data/map/types";

interface Props {
    location: MapLocation;
}

export function LocationPopup({ location }: Props) {
    return (
        <div className="max-w-xs font-serif">
            <div className="mb-1 text-[10px] font-semibold tracking-wider text-[#8a6d2b] uppercase">
                {CATEGORY_LABELS[location.category]}
            </div>
            <h3 className="mb-1 text-sm font-bold text-[#1a1209]">
                {location.name}
            </h3>
            <p className="mb-2 text-xs leading-relaxed text-[#4a3a20]">
                {location.description}
            </p>
            {location.relatedCharacters &&
                location.relatedCharacters.length > 0 && (
                    <div className="text-[10px] text-[#8a7a60]">
                        <strong>Characters:</strong>{" "}
                        {location.relatedCharacters.join(", ")}
                    </div>
                )}
        </div>
    );
}
