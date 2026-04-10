import { Search, X } from "lucide-react";
import type { Age, EventTag, Significance } from "../../../data/timeline/types";
import {
    AGE_LABELS,
    AGE_ORDER,
    TAG_LABELS,
} from "../../../data/timeline/types";

interface Props {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    activeAges: Set<Age>;
    onToggleAge: (age: Age) => void;
    activeTags: Set<EventTag>;
    onToggleTag: (tag: EventTag) => void;
    minSignificance: Significance;
    onSignificanceChange: (s: Significance) => void;
    onClearAll: () => void;
}

export function TimelineFilters({
    searchQuery,
    onSearchChange,
    activeAges,
    onToggleAge,
    activeTags,
    onToggleTag,
    minSignificance,
    onSignificanceChange,
    onClearAll,
}: Props) {
    const hasFilters =
        activeAges.size > 0 ||
        activeTags.size > 0 ||
        minSignificance > 1 ||
        searchQuery;

    return (
        <div className="mb-6 space-y-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4">
            {/* Search */}
            <div className="relative">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
                <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] py-2 pr-4 pl-10 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none focus:border-[var(--color-gold-dim)]"
                />
            </div>

            {/* Ages */}
            <div>
                <span className="mb-2 block text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
                    Ages
                </span>
                <div className="flex flex-wrap gap-2">
                    {AGE_ORDER.map((age) => (
                        <button
                            key={age}
                            onClick={() => onToggleAge(age)}
                            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                                activeAges.size === 0 || activeAges.has(age)
                                    ? "bg-[var(--color-gold-dim)] text-[var(--color-text-primary)]"
                                    : "bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                            }`}
                        >
                            {AGE_LABELS[age]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div>
                <span className="mb-2 block text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
                    Tags
                </span>
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(TAG_LABELS) as EventTag[]).map((tag) => (
                        <button
                            key={tag}
                            onClick={() => onToggleTag(tag)}
                            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                                activeTags.size === 0 || activeTags.has(tag)
                                    ? "bg-[var(--color-gold-dim)] text-[var(--color-text-primary)]"
                                    : "bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                            }`}
                        >
                            {TAG_LABELS[tag]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Significance + Clear */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
                        Min. Significance
                    </span>
                    <div className="flex gap-1">
                        {([1, 2, 3] as Significance[]).map((s) => (
                            <button
                                key={s}
                                onClick={() => onSignificanceChange(s)}
                                className={`flex h-7 w-7 items-center justify-center rounded text-xs font-bold transition-colors ${
                                    minSignificance === s
                                        ? "bg-[var(--color-gold)] text-[var(--color-bg-primary)]"
                                        : "bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                                }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>
                {hasFilters && (
                    <button
                        onClick={onClearAll}
                        className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                    >
                        <X className="h-3 w-3" /> Clear filters
                    </button>
                )}
            </div>
        </div>
    );
}
