# Roblox interview practice

16 exercises prioritized for React and vanilla JavaScript practice. Folder numbers are stable exercise IDs; follow the study order below. Start with the linked prompt in each folder. Exercise 06 has a runnable React + Vite workspace and an active implementation under `src/`.

[Notion study guide](https://app.notion.com/p/40c524cc147181788297fc091cc896ba?pvs=204)

## React UI and async state

| ID | Exercise | Starter |
| --- | --- | --- |
| 06  | React Kanban board                        | [06-problem.jsx](06-react-kanban-board/06-problem.jsx)     |
| 07  | Country/capital matching game             | [problem.jsx](07-country-capital-game/problem.jsx)   |
| 08  | React debounced search                    | [problem.jsx](08-react-debounced-search/problem.jsx) |
| 09  | Expandable file directory                 | [problem.js](09-file-explorer/problem.js)            |
| 10  | React product page with multiple requests | [problem.tsx](10-product-api-requests/problem.tsx)   |

## Vanilla JavaScript UI

| ID | Exercise | Starter |
| --- | --- | --- |
| 04  | Employee search and sorting               | [problem.js](04-employee-search/problem.js)          |
| 05  | People feed                               | [problem.js](05-people-feed/problem.js)              |

## JavaScript utilities and data transformations

| ID | Exercise | Starter |
| --- | --- | --- |
| 14  | Vanilla JavaScript debounce               | [problem.js](14-debounce/problem.js)                 |
| 15  | Fetch batching / concurrency              | [problem.js](15-request-concurrency/problem.js)      |
| 16  | Implement reduce                          | [problem.js](16-array-reduce/problem.js)             |
| 11  | Group endorsements                        | [problem.js](11-group-endorsements/problem.js)       |
| 12  | Aggregate post tags                       | [problem.js](12-aggregate-tags/problem.js)           |
| 13  | Group activity by date and user           | [problem.js](13-group-activity/problem.js)           |

## Additional algorithm practice

| ID | Exercise | Starter |
| --- | --- | --- |
| 01  | Roblox experience scheduler               | [problem.js](01-experience-scheduler/problem.js)     |
| 02  | 849. Maximize Distance to Closest Person  | [problem.js](02-seat-distance/problem.js)            |
| 03  | 1861. Rotating the Box                    | [problem.js](03-rotate-box/problem.js)               |

## Current practice — 06. React Kanban board

Current focus: API-backed React state, component composition, and immutable task updates.

- [Run instructions and progress](06-react-kanban-board/README.md)
- [Exercise requirements](06-react-kanban-board/06-problem.jsx)
- [Active implementation](06-react-kanban-board/src/components/KanbanBoard.jsx)
- [Mock API and fixtures](06-react-kanban-board/src/data/kanbanData.js)

The sections above define study order; folder IDs and completion status are separate. Current focus is based on the active workspace; completion has not been asserted. Keep this section, `PROBLEMS.md`, and the Notion guide aligned when changing focus or moving files.

## Evidence and priority

01 is the historical Roblox scheduler prompt in your collection. 02–03 have saved Roblox company tags; they are not confirmed current questions. React exercises 06–10 and vanilla JavaScript UI exercises 04–05 come first because the current focus is practical frontend work. Utilities and data transformations follow, with algorithms last.

## Using these files

People Feed and Employee Search include HTML/CSS reference pages. Exercise 06 includes its own React + Vite environment; the other React exercises need a practice environment. Original source paths and GitHub links remain in comments. Kanban includes a partial earlier attempt, not a finished reference solution.

[Practice checklist](PROBLEMS.md)

## Official LeetCode links

| Folder | Problem | Difficulty |
|---|---|---|
| 02-seat-distance | [849. Maximize Distance to Closest Person](https://leetcode.com/problems/maximize-distance-to-closest-person/) | Medium |
| 03-rotate-box | [1861. Rotating the Box](https://leetcode.com/problems/rotating-the-box/) | Medium |
