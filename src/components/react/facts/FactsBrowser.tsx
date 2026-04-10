import { Search, Star, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import type { Fact, FactCategory, FactSource } from "../../../data/facts/types";
import { CATEGORY_LABELS, SOURCE_LABELS } from "../../../data/facts/types";
import { textSearch } from "../../../utils/search";
import { FactCard } from "./FactCard";

interface Props {
    facts: Fact[];
}

export function FactsBrowser({ facts }: Props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategories, setActiveCategories] = useState<Set<FactCategory>>(
        new Set(),
    );
    const [activeSources, setActiveSources] = useState<Set<FactSource>>(
        new Set(),
    );
    const [quizOnly, setQuizOnly] = useState(false);

    const toggleCategory = useCallback((cat: FactCategory) => {
        setActiveCategories((prev) => {
            const next = new Set(prev);
            if (next.has(cat)) next.delete(cat);
            else next.add(cat);
            return next;
        });
    }, []);

    const toggleSource = useCallback((src: FactSource) => {
        setActiveSources((prev) => {
            const next = new Set(prev);
            if (next.has(src)) next.delete(src);
            else next.add(src);
            return next;
        });
    }, []);

    const clearAll = useCallback(() => {
        setActiveCategories(new Set());
        setActiveSources(new Set());
        setQuizOnly(false);
        setSearchQuery("");
    }, []);

    const filtered = useMemo(() => {
        let result = facts;
        if (activeCategories.size > 0) {
            result = result.filter((f) => activeCategories.has(f.category));
        }
        if (activeSources.size > 0) {
            result = result.filter((f) =>
                f.sources.some((s) => activeSources.has(s)),
            );
        }
        if (quizOnly) {
            result = result.filter((f) => f.quizPotential);
        }
        if (searchQuery) {
            result = textSearch(
                result,
                searchQuery,
                (f) => `${f.title} ${f.content}`,
            );
        }
        return result;
    }, [facts, activeCategories, activeSources, quizOnly, searchQuery]);

    const hasFilters =
        activeCategories.size > 0 ||
        activeSources.size > 0 ||
        quizOnly ||
        searchQuery;

    return (
        <div>
            {/* Filters */}
            <div className="mb-6 space-y-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4">
                <div className="relative">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
                    <input
                        type="text"
                        placeholder="Search facts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] py-2 pr-4 pl-10 text-base text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none focus:border-[var(--color-gold-dim)]"
                    />
                </div>

                <div>
                    <span className="mb-2 block text-sm font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
                        Category
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {(Object.keys(CATEGORY_LABELS) as FactCategory[]).map(
                            (cat) => (
                                <button
                                    key={cat}
                                    onClick={() => toggleCategory(cat)}
                                    className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                                        activeCategories.size === 0 ||
                                        activeCategories.has(cat)
                                            ? "bg-[var(--color-shire-green)]/30 text-[var(--color-shire-green-light)]"
                                            : "bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                                    }`}
                                >
                                    {CATEGORY_LABELS[cat]}
                                </button>
                            ),
                        )}
                    </div>
                </div>

                <div>
                    <span className="mb-2 block text-sm font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
                        Source
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {(Object.keys(SOURCE_LABELS) as FactSource[]).map(
                            (src) => (
                                <button
                                    key={src}
                                    onClick={() => toggleSource(src)}
                                    className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                                        activeSources.size === 0 ||
                                        activeSources.has(src)
                                            ? "bg-[var(--color-shire-green)]/30 text-[var(--color-shire-green-light)]"
                                            : "bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                                    }`}
                                >
                                    {SOURCE_LABELS[src]}
                                </button>
                            ),
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setQuizOnly(!quizOnly)}
                        className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                            quizOnly
                                ? "bg-[var(--color-gold)] text-[var(--color-bg-primary)]"
                                : "bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                        }`}
                    >
                        <Star className="h-3 w-3" /> Quiz Potential Only
                    </button>
                    {hasFilters && (
                        <button
                            onClick={clearAll}
                            className="flex items-center gap-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                        >
                            <X className="h-3 w-3" /> Clear filters
                        </button>
                    )}
                </div>
            </div>

            {/* Results count */}
            <p className="mb-4 text-base text-[var(--color-text-muted)]">
                {filtered.length} fact{filtered.length !== 1 ? "s" : ""}
            </p>

            {/* Grid */}
            {filtered.length === 0 ? (
                <p className="py-12 text-center text-[var(--color-text-muted)]">
                    No facts match your filters.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((fact) => (
                        <FactCard key={fact.id} fact={fact} />
                    ))}
                </div>
            )}
        </div>
    );
}
