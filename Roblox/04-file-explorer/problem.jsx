/*
Expandable file explorer — Mock interview exercise
Suggested time: 45 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/frontend-projects/react-projects/use-context/src/Components/FileDirectory.js | https://github.com/rogerprz/frontend-projects/blob/main/react-projects/use-context/src/Components/FileDirectory.js
Earlier saved attempt (separate from the Solution view): /Users/roger/Sites/frontend-projects/Roblox/04-file-explorer/FileDirectory.js

Build a recursive React file explorer from the sample tree below.
A folder has a children array (possibly empty); a file has no children. IDs are unique.
The solution includes an additional empty folder to demonstrate the empty-folder state.
Requirements:
1. Render root entries, with all folders collapsed initially.
2. Toggle folders independently; nested folders can contain files or folders.
3. Preserve nested expansion state when a parent is collapsed and reopened.
4. Files do not toggle. Indent children and visually distinguish files/folders.
5. Folder controls must support keyboard interaction and aria-expanded.
6. Empty folders may expand and display Empty folder; an empty root displays No files.
7. Do not mutate the input. Add semantic markup and styling as needed.
Example: expand src, expand components, collapse src, reopen src: components stays open.
Follow-up: discuss fetching folder children only when expanded.

Practice runs this problem file. Solution runs solution.jsx.
The older saved attempt is separate from the working solution.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

import React, { useState } from "react";

const FILE_TREE = [
  {
    id: "src",
    name: "src",
    type: "folder",
    children: [
      {
        id: "components",
        name: "components",
        type: "folder",
        children: [{ id: "app", name: "App.jsx", type: "file" }],
      },
      { id: "index", name: "index.js", type: "file" },
    ],
  },
  { id: "readme", name: "README.md", type: "file" },
];
// TODO: Implement the explorer here.

// INPUT EXAMPLES — ready to use; calls remain commented until you implement the problem.
// FILE_TREE above is the primary input fixture.
const emptyFileTree = []; // Expected UI: No files
const emptyFolderTree = [
  { id: "empty", name: "Empty folder", type: "folder", children: [] },
];
const singleFileTree = [{ id: "single-file", name: "notes.txt", type: "file" }];
// Pass any fixture as the explorer's input while practicing.

// Runnable practice shell — implement the requirements above.
export default function FileExplorer({ data = FILE_TREE }) {
  return (
    <section>
      <h2>Explorer starter</h2>
      <p>TODO: Render the tree recursively with folder controls.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
}
