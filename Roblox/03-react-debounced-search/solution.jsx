import React, { useEffect, useState } from "react";
export function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}
export default function Search() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 500);
  return (
    <section>
      <label htmlFor="query">Search query</label>
      <input
        id="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type a query…"
      />
      <p>
        Wait 500 ms after typing to update results. Clear the input to remove
        results immediately.
      </p>
      <p role="status">
        {query.trim() && debounced.trim()
          ? `Search results for ${debounced}`
          : "No results yet."}
      </p>
    </section>
  );
}
