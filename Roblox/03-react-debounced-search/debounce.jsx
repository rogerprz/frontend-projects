/* Original: /Users/roger/Sites/coding-algorithms/practice/debounce.jsx | https://github.com/rogerprz/coding-algorithms/blob/main/practice/debounce.jsx */
import React, { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    });

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};

function SearchComponent() {
  const [query, setQuery] = useState('');

  const [debounceQuery, setDebounceQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debounceQuery) {
      console.log('API call with query:', debounceQuery);
    }
  }, [debounceQuery]);

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>
        Debounced Query:
        {debounceQuery}
      </p>
      /
    </div>
  );
}

export { useDebounce, SearchComponent };
