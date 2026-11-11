/*
Country and capital matching — Mock interview exercise
Suggested time: 45 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/tech-screen-solutions/oleria/matchingPairs.jsx | https://github.com/rogerprz/tech-screen-solutions/blob/main/oleria/matchingPairs.jsx
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/02-country-capital-game/matchingPairs.jsx

Implement a React CountryCapitalGame({ data }) component.
Input example: { Japan: 'Tokyo', France: 'Paris', Italy: 'Rome' }.
Assume labels are unique across countries and capitals and input is fixed per game.
Requirements:
1. Render all country and capital labels as buttons in shuffled order.
2. First selection becomes blue. Clicking it again does nothing.
3. A correct second selection removes both matching buttons and clears selection.
4. An incorrect second selection makes both buttons red.
5. The next click clears incorrect feedback and selects that clicked item in blue.
6. Use immutable updates; never mutate data. Show completion once all pairs are gone.
7. Handle empty input and keyboard activation of buttons.
Example: Japan then Tokyo removes both; Japan then Paris marks both incorrect.
Follow-up: how would you reset the game when data changes?

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

import React, { useState } from 'react';

// TODO: Implement CountryCapitalGame here.

// Runnable practice shell — implement the requirements above.
export default function CountryCapitalGame({ data = { Japan: 'Tokyo', France: 'Paris', Italy: 'Rome' } }) {
  return (
    <section>
      <h2>Game starter</h2>
      <p>TODO: Render shuffled buttons and implement matching.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
}
