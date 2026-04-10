import { useCallback, useState } from "react";

export function useFilter<T extends string>(initialValues: T[] = []) {
    const [active, setActive] = useState<Set<T>>(new Set(initialValues));

    const toggle = useCallback((value: T) => {
        setActive((prev) => {
            const next = new Set(prev);
            if (next.has(value)) {
                next.delete(value);
            } else {
                next.add(value);
            }
            return next;
        });
    }, []);

    const clear = useCallback(() => setActive(new Set()), []);

    const isActive = useCallback(
        (value: T) => active.size === 0 || active.has(value),
        [active],
    );

    return { active, toggle, clear, isActive };
}
