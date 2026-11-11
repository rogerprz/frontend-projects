# React Kanban board practice

Current Roblox practice focus. This is an adapted mock interview exercise, not an official Roblox assessment.

[Notion study guide](https://app.notion.com/p/40c524cc147181788297fc091cc896ba?pvs=204) · [All exercises](../PROBLEMS.md) · [Full prompt](06-problem.jsx)

## Run

```sh
cd /Users/roger/Sites/frontend-projects/Roblox/06-react-kanban-board
npm install
npm run dev
```

`npm run build` builds the app; `npm run lint` checks the workspace. Unfinished practice code can produce lint errors.

## Work here

- `src/App.jsx` mounts `src/components/KanbanBoard.jsx`, the active attempt.
- `src/data/kanbanData.js` exports `COLUMNS`, `TASKS`, `SANITIZED_COL_NAMES`, and `tasksAPI()`.
- `src/components/AddTaskForm.jsx`, `KanbanColumn.jsx`, and `TaskCard.jsx` are empty component placeholders.
- `src/components/KanbanBoardSolution.jsx` is a partial earlier attempt. It is not mounted and still imports obsolete `columns` and `BOARDS` exports. Its add-task modal is a placeholder; treat it as review/debugging material, not a working solution.
- `06-problem.jsx` is the exercise brief; it is not the mounted app.

## Current data contract

`tasksAPI()` resolves after roughly 500 ms with `{ columns: COLUMNS, tasks: TASKS }`. Columns have `{ id, key, name }`; task buckets use `todo`, `inprogress`, and `done`. Each task has `{ id, title, description }`. Use `column.key` to select a bucket; derive counts from its array. This workspace uses grouped tasks rather than the original flat `initialTasks`/`status` prompt.

## Progress and next steps

The active board fetches and stores the API response. Rendering and interactions remain unfinished. Fixture task titles describe sample content; they do not indicate completed practice requirements.

- [ ] Handle loading, error, and empty API states.
- [ ] Render three columns, cards, descriptions, and derived counts.
- [ ] Implement the component placeholders and pass data/actions through props.
- [ ] Add a labeled form; trim titles, reject blank input, support Enter, and create unique IDs in To do.
- [ ] Move cards left/right immutably, append to the destination, and enforce boundaries.
- [ ] Delete by ID; check duplicate titles and rapid repeated actions.
- [ ] Check empty columns, keyboard controls, and narrow-screen layout.

Practice in 45-minute rounds and explain state ownership, derived state, effect cleanup, and immutable updates. Keep the local index and Notion current-focus section aligned when this workspace changes.
