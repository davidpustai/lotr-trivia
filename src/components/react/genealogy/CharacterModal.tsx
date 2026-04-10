import { X } from "lucide-react";
import type { Character } from "../../../data/genealogy/types";
import { RACE_LABELS } from "../../../data/genealogy/types";

interface Props {
    character: Character;
    onClose: () => void;
}

export function CharacterModal({ character, onClose }: Props) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/60" />
            <div
                className="relative z-10 max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                >
                    <X className="h-5 w-5" />
                </button>

                <h2 className="mb-1 text-2xl font-bold text-[var(--color-gold)]">
                    {character.name}
                </h2>
                <p className="mb-3 text-base text-[var(--color-text-muted)]">
                    {RACE_LABELS[character.race]}
                </p>

                {character.otherNames && character.otherNames.length > 0 && (
                    <div className="mb-3">
                        <span className="text-sm font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
                            Also known as
                        </span>
                        <p className="text-base text-[var(--color-text-secondary)]">
                            {character.otherNames.join(", ")}
                        </p>
                    </div>
                )}

                {character.titles && character.titles.length > 0 && (
                    <div className="mb-3">
                        <span className="text-sm font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
                            Titles
                        </span>
                        <p className="text-base text-[var(--color-text-secondary)]">
                            {character.titles.join(", ")}
                        </p>
                    </div>
                )}

                <div className="mb-3 flex gap-4 text-base text-[var(--color-text-secondary)]">
                    {character.birth && (
                        <span>
                            <span className="text-[var(--color-text-muted)]">
                                Born:
                            </span>{" "}
                            {character.birth}
                        </span>
                    )}
                    {character.death && (
                        <span>
                            <span className="text-[var(--color-text-muted)]">
                                Died:
                            </span>{" "}
                            {character.death}
                        </span>
                    )}
                </div>

                <p className="mb-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
                    {character.bio}
                </p>

                {character.feats && character.feats.length > 0 && (
                    <div className="mb-4">
                        <span className="mb-1 block text-sm font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
                            Notable Feats
                        </span>
                        <ul className="list-inside list-disc space-y-1 text-base text-[var(--color-text-secondary)]">
                            {character.feats.map((feat, i) => (
                                <li key={i}>{feat}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {character.quizFacts && character.quizFacts.length > 0 && (
                    <div>
                        <span className="mb-1 block text-sm font-semibold tracking-wider text-[var(--color-gold-dim)] uppercase">
                            Quiz Facts
                        </span>
                        <ul className="space-y-1">
                            {character.quizFacts.map((fact, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-base text-[var(--color-text-primary)]"
                                >
                                    <span className="mt-0.5 text-[var(--color-gold)]">
                                        ★
                                    </span>
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
