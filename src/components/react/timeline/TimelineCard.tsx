import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { TimelineEvent } from "../../../data/timeline/types";
import { TAG_LABELS } from "../../../data/timeline/types";

interface Props {
    event: TimelineEvent;
    side: "left" | "right";
}

export function TimelineCard({ event, side }: Props) {
    const [expanded, setExpanded] = useState(false);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const significanceStars =
        "★".repeat(event.significance) + "☆".repeat(3 - event.significance);

    return (
        <div
            ref={ref}
            className={`relative flex w-full items-start ${side === "right" ? "md:flex-row-reverse" : ""}`}
        >
            {/* Connector dot */}
            <div className="absolute top-6 left-4 z-10 hidden h-3 w-3 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-bg-primary)] md:left-1/2 md:-ml-1.5 md:block" />

            {/* Card */}
            <div
                className={`ml-10 w-full transition-all duration-500 md:ml-0 md:w-[calc(50%-2rem)] ${
                    side === "left"
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                } ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 text-left transition-colors hover:border-[var(--color-gold-dim)] hover:bg-[var(--color-bg-card-hover)]"
                >
                    <div className="mb-1 flex items-start justify-between gap-2">
                        {event.year && (
                            <span className="shrink-0 text-sm font-semibold text-[var(--color-gold)]">
                                {event.year}
                            </span>
                        )}
                        <span className="text-sm text-[var(--color-gold-dim)]">
                            {significanceStars}
                        </span>
                    </div>
                    <h3 className="mb-1 text-base font-bold text-[var(--color-text-primary)]">
                        {event.title}
                    </h3>
                    <p className="text-base text-[var(--color-text-secondary)]">
                        {event.summary}
                    </p>

                    {/* Tags */}
                    <div className="mt-2 flex flex-wrap gap-1">
                        {event.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded bg-[var(--color-bg-secondary)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                            >
                                {TAG_LABELS[tag]}
                            </span>
                        ))}
                    </div>

                    {/* Expand indicator */}
                    {event.details && (
                        <ChevronDown
                            className={`mt-2 h-4 w-4 text-[var(--color-text-muted)] transition-transform ${expanded ? "rotate-180" : ""}`}
                        />
                    )}

                    {/* Details */}
                    {expanded && event.details && (
                        <div className="mt-3 border-t border-[var(--color-border)] pt-3 text-base text-[var(--color-text-secondary)]">
                            {event.details}
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}
