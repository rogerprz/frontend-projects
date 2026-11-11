/*
Debounced React search — Mock interview exercise
Suggested time: 35 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/practice/debounce.jsx | https://github.com/rogerprz/coding-algorithms/blob/main/practice/debounce.jsx
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/08-react-debounced-search/debounce.jsx

Implement useDebounce(value, delay) and a React Search component.
Requirements:
1. The input updates immediately as the user types.
2. The debounced value updates only after delay milliseconds without changes.
3. The initial debounced value equals the initial value.
4. Cancel obsolete timers when value/delay changes or the component unmounts.
5. After 500 ms, display the latest nonempty debounced query as Search results for X.
6. Clearing input clears displayed results immediately; old timers must not restore them.
Example: typing 'r', 'ro', 'rob' 100 ms apart produces only the final debounced query.
Use React hooks without debounce libraries. Add accessible input labeling.
Follow-up: explain how you would prevent stale network responses.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

import React, { useEffect, useState } from 'react';

// TODO: Implement useDebounce and Search here.

// Runnable practice shell — implement the requirements above.
export default function Search() {
  return <section><h2>Search starter</h2><p>TODO: Add a controlled input and implement useDebounce.</p></section>;
}
