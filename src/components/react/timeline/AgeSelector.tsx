import type { Age } from "../../../data/timeline/types";
import { AGE_LABELS, AGE_ORDER } from "../../../data/timeline/types";

interface Props {
    currentAge: Age | null;
    onSelectAge: (age: Age) => void;
}

export function AgeSelector({ currentAge, onSelectAge }: Props) {
    return (
        <div className="sticky top-14 z-20 -mx-4 mb-6 overflow-x-auto border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/95 px-4 py-2 backdrop-blur-sm">
            <div className="flex min-w-max gap-1">
                {AGE_ORDER.map((age) => (
                    <button
                        key={age}
                        onClick={() => {
                            onSelectAge(age);
                            document
                                .getElementById(`age-${age}`)
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                        }}
                        className={`rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
                            currentAge === age
                                ? "bg-[var(--color-gold)] text-[var(--color-bg-primary)]"
                                : "text-[var(--color-text-muted)] hover:bg-[var(--color-bg-card)] hover:text-[var(--color-text-secondary)]"
                        }`}
                    >
                        {AGE_LABELS[age]}
                    </button>
                ))}
            </div>
        </div>
    );
}
