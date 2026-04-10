export function textSearch<T>(
    items: T[],
    query: string,
    getSearchableText: (item: T) => string,
): T[] {
    if (!query.trim()) return items;
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return items.filter((item) => {
        const text = getSearchableText(item).toLowerCase();
        return terms.every((term) => text.includes(term));
    });
}
