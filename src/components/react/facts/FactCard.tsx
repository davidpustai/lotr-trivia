import { Star } from "lucide-react";
import type { Fact } from "../../../data/facts/types";
import { CATEGORY_LABELS, SOURCE_LABELS } from "../../../data/facts/types";

interface Props {
    fact: Fact;
}

export function FactCard({ fact }: Props) {
    return (
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 transition-colors hover:border-[var(--color-border-light)] hover:bg-[var(--color-bg-card-hover)]">
            <div className="mb-2 flex items-start justify-between gap-2">
                <span className="rounded bg-[var(--color-bg-secondary)] px-2 py-0.5 text-[10px] font-semibold tracking-wider text-[var(--color-shire-green)] uppercase">
                    {CATEGORY_LABELS[fact.category]}
                </span>
                {fact.quizPotential && (
                    <span className="flex shrink-0 items-center gap-1 rounded bg-[var(--color-gold-dim)]/30 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-gold)]">
                        <Star className="h-3 w-3" /> Quiz
                    </span>
                )}
            </div>
            <h3 className="mb-2 text-base font-bold text-[var(--color-text-primary)]">
                {fact.title}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {fact.content}
            </p>
            <div className="flex flex-wrap gap-1">
                {fact.sources.map((source) => (
                    <span
                        key={source}
                        className="text-[10px] text-[var(--color-text-muted)]"
                    >
                        {SOURCE_LABELS[source]}
                    </span>
                ))}
            </div>
        </div>
    );
}
