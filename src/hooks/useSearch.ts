import { useMemo, useState } from "react";
import { textSearch } from "../utils/search";

export function useSearch<T>(
    items: T[],
    getSearchableText: (item: T) => string,
) {
    const [query, setQuery] = useState("");

    const results = useMemo(
        () => textSearch(items, query, getSearchableText),
        [items, query, getSearchableText],
    );

    return { query, setQuery, results };
}
