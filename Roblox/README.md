# Roblox interview practice

17 exercises prioritized for React and vanilla JavaScript practice. Folder numbers match the study order below. Start with the linked prompt in each folder. React exercises 01–05 and 17 each have a runnable React + Vite workspace with Solution and Practice views.

[Notion study guide](https://app.notion.com/p/40c524cc147181788297fc091cc896ba?pvs=204)

## React UI and async state

| ID | Exercise | Starter |
| --- | --- | --- |
| 01  | React Kanban board                        | [01-problem.jsx](01-react-kanban-board/01-problem.jsx)     |
| 02  | Country/capital matching game             | [problem.jsx](02-country-capital-game/problem.jsx)   |
| 03  | React debounced search                    | [problem.jsx](03-react-debounced-search/problem.jsx) |
| 04  | Expandable file directory                 | [problem.jsx](04-file-explorer/problem.jsx)            |
| 05  | React product page with multiple requests | [problem.tsx](05-product-api-requests/problem.tsx)   |

## Vanilla JavaScript UI

| ID | Exercise | Starter |
| --- | --- | --- |
| 06  | Employee search and sorting               | [problem.js](06-employee-search/problem.js)          |
| 07  | People feed                               | [problem.js](07-people-feed/problem.js)              |

## JavaScript utilities and data transformations

| ID | Exercise | Starter |
| --- | --- | --- |
| 08  | Vanilla JavaScript debounce               | [problem.js](08-debounce/problem.js)                 |
| 09  | Fetch batching / concurrency              | [problem.js](09-request-concurrency/problem.js)      |
| 10  | Implement reduce                          | [problem.js](10-array-reduce/problem.js)             |
| 11  | Group endorsements                        | [problem.js](11-group-endorsements/problem.js)       |
| 12  | Aggregate post tags                       | [problem.js](12-aggregate-tags/problem.js)           |
| 13  | Group activity by date and user           | [problem.js](13-group-activity/problem.js)           |

## Additional algorithm practice

| ID | Exercise | Starter |
| --- | --- | --- |
| 14  | Roblox experience scheduler               | [problem.js](14-experience-scheduler/problem.js)     |
| 15  | 849. Maximize Distance to Closest Person  | [problem.js](15-seat-distance/problem.js)            |
| 16  | 1861. Rotating the Box                    | [problem.js](16-rotate-box/problem.js)               |

## Current practice — 01. React Kanban board

Current focus: API-backed React state, component composition, and immutable task updates.

- [Run instructions and progress](01-react-kanban-board/README.md)
- [Exercise requirements](01-react-kanban-board/01-problem.jsx)
- [Active implementation](01-react-kanban-board/src/components/KanbanBoard.jsx)
- [Mock API and fixtures](01-react-kanban-board/src/data/kanbanData.js)

The sections above define study order; folder numbers match that order; completion is tracked separately. Current focus is based on the active workspace; completion has not been asserted. Keep this section, `PROBLEMS.md`, and the Notion guide aligned when changing focus or moving files.

## Evidence and priority

14 is the historical Roblox scheduler prompt in your collection. 15–16 have saved Roblox company tags; they are not confirmed current questions. React exercises 01–05 and vanilla JavaScript UI exercises 06–07 come first because the current focus is practical frontend work. Utilities and data transformations follow, with algorithms last.

## Using these files

People Feed and Employee Search include HTML/CSS reference pages. React exercises 01–05 and 17 each include a Vite environment. Run `npm install`, then `npm run dev` inside the exercise folder. Solution opens by default; Practice runs your editable starter. Original source paths and GitHub links remain in comments. Each React exercise has a working solution separate from your starter. Older saved attempts are retained as additional review material; they are not the implementations shown in Solution.

[Practice checklist](PROBLEMS.md)

## Official LeetCode links

| Folder | Problem | Difficulty |
|---|---|---|
| 15-seat-distance | [849. Maximize Distance to Closest Person](https://leetcode.com/problems/maximize-distance-to-closest-person/) | Medium |
| 16-rotate-box | [1861. Rotating the Box](https://leetcode.com/problems/rotating-the-box/) | Medium |

## Supplemental React recursion practice

17. [JSON to React](17-json-to-react/README.md) — render nested document data recursively; copied from the saved exercise containing the Atlassian logo.
