import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
    Age,
    EventTag,
    Significance,
    TimelineEvent,
} from "../../../data/timeline/types";
import { AGE_LABELS, AGE_ORDER } from "../../../data/timeline/types";
import { textSearch } from "../../../utils/search";
import { AgeSelector } from "./AgeSelector";
import { TimelineCard } from "./TimelineCard";
import { TimelineFilters } from "./TimelineFilters";

interface Props {
    events: TimelineEvent[];
}

export function Timeline({ events }: Props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeAges, setActiveAges] = useState<Set<Age>>(new Set());
    const [activeTags, setActiveTags] = useState<Set<EventTag>>(new Set());
    const [minSignificance, setMinSignificance] = useState<Significance>(1);
    const [activeDepths, setActiveDepths] = useState<Set<number>>(
        new Set([1, 2]),
    );
    const [currentAge, setCurrentAge] = useState<Age | null>(null);
    const ageRefs = useRef<Map<Age, HTMLDivElement>>(new Map());

    const toggleAge = useCallback((age: Age) => {
        setActiveAges((prev) => {
            const next = new Set(prev);
            if (next.has(age)) next.delete(age);
            else next.add(age);
            return next;
        });
    }, []);

    const toggleTag = useCallback((tag: EventTag) => {
        setActiveTags((prev) => {
            const next = new Set(prev);
            if (next.has(tag)) next.delete(tag);
            else next.add(tag);
            return next;
        });
    }, []);

    const toggleDepth = useCallback((d: number) => {
        setActiveDepths((prev) => {
            const next = new Set(prev);
            if (next.has(d)) {
                if (next.size > 1) next.delete(d);
            } else {
                next.add(d);
            }
            return next;
        });
    }, []);

    const clearAll = useCallback(() => {
        setActiveAges(new Set());
        setActiveTags(new Set());
        setMinSignificance(1);
        setActiveDepths(new Set([1, 2]));
        setSearchQuery("");
    }, []);

    const filtered = useMemo(() => {
        let result = events;
        result = result.filter((e) => activeDepths.has(e.depth));
        if (activeAges.size > 0) {
            result = result.filter((e) => activeAges.has(e.age));
        }
        if (activeTags.size > 0) {
            result = result.filter((e) =>
                e.tags.some((t) => activeTags.has(t)),
            );
        }
        if (minSignificance > 1) {
            result = result.filter((e) => e.significance >= minSignificance);
        }
        if (searchQuery) {
            result = textSearch(
                result,
                searchQuery,
                (e) => `${e.title} ${e.summary} ${e.details ?? ""}`,
            );
        }
        return result;
    }, [events, activeDepths, activeAges, activeTags, minSignificance, searchQuery]);

    // Group by age
    const grouped = useMemo(() => {
        const groups: { age: Age; events: TimelineEvent[] }[] = [];
        for (const age of AGE_ORDER) {
            const ageEvents = filtered.filter((e) => e.age === age);
            if (ageEvents.length > 0) {
                groups.push({ age, events: ageEvents });
            }
        }
        return groups;
    }, [filtered]);

    // Track current age via intersection observer
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        for (const [age, el] of ageRefs.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setCurrentAge(age);
                },
                { rootMargin: "-100px 0px -60% 0px" },
            );
            observer.observe(el);
            observers.push(observer);
        }
        return () => observers.forEach((o) => o.disconnect());
    }, [grouped]);

    return (
        <div>
            <TimelineFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                activeAges={activeAges}
                onToggleAge={toggleAge}
                activeTags={activeTags}
                onToggleTag={toggleTag}
                minSignificance={minSignificance}
                onSignificanceChange={setMinSignificance}
                activeDepths={activeDepths}
                onToggleDepth={toggleDepth}
                onClearAll={clearAll}
            />

            <AgeSelector currentAge={currentAge} onSelectAge={setCurrentAge} />

            {filtered.length === 0 ? (
                <p className="py-12 text-center text-[var(--color-text-muted)]">
                    No events match your filters.
                </p>
            ) : (
                <div className="relative">
                    {/* Center line */}
                    <div className="absolute top-0 left-4 hidden h-full w-0.5 bg-[var(--color-border)] md:left-1/2 md:block" />
                    {/* Mobile line */}
                    <div className="absolute top-0 left-4 h-full w-0.5 bg-[var(--color-border)] md:hidden" />

                    {grouped.map(({ age, events: ageEvents }) => (
                        <div
                            key={age}
                            id={`age-${age}`}
                            ref={(el) => {
                                if (el) ageRefs.current.set(age, el);
                            }}
                        >
                            <div className="relative mt-8 mb-4 flex justify-center first:mt-0">
                                <h2 className="relative z-10 rounded-full border border-[var(--color-gold-dim)] bg-[var(--color-bg-primary)] px-6 py-2 text-center text-lg font-bold text-[var(--color-gold)]">
                                    {AGE_LABELS[age]}
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {ageEvents.map((event, i) => (
                                    <TimelineCard
                                        key={event.id}
                                        event={event}
                                        side={i % 2 === 0 ? "left" : "right"}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
