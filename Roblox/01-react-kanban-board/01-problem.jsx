/*
React Kanban board — Mock interview exercise
Suggested time: 45 minutes
Original: New practice prompt created for your Roblox Study guide.
Guide: https://app.notion.com/p/40c524cc147181788297fc091cc896ba?pvs=204
This is an adapted practice scenario, not an official Roblox assessment.

CURRENT WORKSPACE ADAPTATION
The mounted practice app is src/components/KanbanBoard.jsx (via src/App.jsx).
Fetch tasksAPI() from src/data/kanbanData.js. It resolves after about 500 ms with
{ columns, tasks }. Columns have { id, key, name }; tasks are grouped into
{ todo: [], inprogress: [], done: [] }. Tasks have { id, title, description }.
Use column.key to access each bucket. Render descriptions as well as titles.
Add loading, error, and empty states. Move tasks between buckets immutably;
append moved tasks to the destination. New tasks go into todo with unique IDs.
AddTaskForm.jsx, KanbanColumn.jsx, and TaskCard.jsx are component placeholders.
KanbanBoardSolution.jsx is an unmounted, incomplete earlier attempt with stale
imports; it is review material, not a finished solution.
The original flat-data variant below remains available for a separate round.
Apply its interaction and accessibility requirements to the grouped API model
when working in the current app. See README.md for progress and run commands.

TASK — ORIGINAL FLAT-DATA VARIANT
Build a React KanbanBoard({ initialTasks }) component that helps a small team
track work across three columns: To do, In progress, and Done.
Use the status values 'todo', 'in-progress', and 'done'.
Each task has { id: string, title: string, status: string }.
Assume initialTasks contains valid tasks with unique IDs and is fixed after mount.

CORE REQUIREMENTS
1. Render the three columns in the order above, with a heading and task count.
2. Render each task exactly once, in its corresponding column. Initially preserve
   input order within each column. Display No tasks in empty columns.
3. Provide a labeled title input and Add task button. Enter submits the same form.
   Trim input, reject empty/whitespace-only titles, and show an inline error.
   Successful submission creates a uniquely identified To do task and clears input.
   Duplicate titles are allowed; titles are not task IDs.
4. Each card has controls to move one column left or right. Hide or disable moves
   beyond board boundaries. A moved task is appended to its destination column.
5. Allow deleting a task. Delete only the card with that ID, even if titles repeat.
6. Derive column counts from tasks so they update after add, move, and delete.
7. Use immutable state updates; never modify initialTasks or its task objects.
8. Use semantic HTML, accessible names, and keyboard-operable controls. Style the
   board with three columns on wide screens and a usable layout on narrow screens.
9. Render titles as text. Rapid repeated actions must not lose unrelated updates.

EXAMPLE WALKTHROUGH
Initial state using SAMPLE_TASKS below:
  To do (2): Write tests, Update docs
  In progress (1): Build search
  Done (0): No tasks
Move Write tests right:
  To do (1): Update docs
  In progress (2): Build search, Write tests
Add '  Review PR  ':
  To do (2): Update docs, Review PR
Delete Build search:
  In progress (1): Write tests
Submit only spaces: show an error; counts and existing tasks stay unchanged.

SCOPE
Use React and plain CSS. No backend, persistence, drag-and-drop, or state-management
library is required for the core exercise. Add CSS in a separate file if useful.
The supplied data is fixture data, not a solution. Build the UI and state logic.

BEFORE CODING
Clarify requirements and explain your component breakdown and source of truth.

BEFORE FINISHING
Try empty input, empty columns, repeated titles, rapid moves, boundary moves,
and deleting the final task. Explain your state model and tradeoffs.

OPTIONAL FOLLOW-UPS (after the core requirements work)
- Add drag-and-drop while preserving keyboard-accessible move controls.
- Support reordering cards within a column.
- Persist the board in localStorage and safely handle invalid saved data.
- Save moves through an API with optimistic updates and rollback on failure.
*/

import React, { useState } from 'react';

const SAMPLE_TASKS = [
  { id: 'task-1', title: 'Write tests', status: 'todo' },
  { id: 'task-2', title: 'Build search', status: 'in-progress' },
  { id: 'task-3', title: 'Update docs', status: 'todo' }
];

// TODO: Implement KanbanBoard({ initialTasks }) and any supporting components.
// TODO: Mount it with SAMPLE_TASKS in your React practice environment.
