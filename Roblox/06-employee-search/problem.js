/*
Employee search and sorting — Mock interview exercise
Suggested time: 45 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/frontend-projects/vanillaHtmlCss/employeeSearch/employeeSearch.js | https://github.com/rogerprz/frontend-projects/blob/main/vanillaHtmlCss/employeeSearch/employeeSearch.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/06-employee-search/employeeSearch.js

Build an accessible employee table using vanilla HTML, CSS, and JavaScript.
Requirements:
1. Display every employee with name, department, and age.
2. Filter by case-insensitive name substring after 300 ms without typing.
3. Clicking a column header toggles ascending/descending sorting of filtered rows.
4. Search and sorting must compose; clearing search restores all matching rows.
5. Reset clears the query and returns to original data order.
6. Support Enter/Space on sort controls, expose sorting with aria-sort, and label input.
7. Render a clear no-results state. Do not mutate EMPLOYEES.
Example: query 'ali' returns Alice; sorting age ascending returns Bob before Alice.
You may add HTML/CSS in new files. Do not load the reference script.
Follow-up: how would server-side filtering change your approach?

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

const EMPLOYEES = [
  { id: 1, name: "Alice Johnson", department: "Engineering", age: 29 },
  { id: 2, name: "Bob Smith", department: "Design", age: 25 },
  { id: 3, name: "Charlie Kim", department: "Product", age: 42 },
];
// TODO: Build your table here.

// INPUT EXAMPLES — ready to use; calls remain commented until you implement the problem.
// EMPLOYEES above is the primary input fixture.
const searchQueryExample = "ali"; // Matching ID: 1
const searchQueryMixedCase = "ALICE"; // Matching ID: 1
const searchQueryNoResults = "Zelda"; // No matching rows
const searchQueryEmpty = ""; // All employees
const sortColumnExample = "age"; // Ascending IDs: [2, 1, 3]
const emptyEmployees = []; // Empty-table scenario
