# 17. JSON to React

Build a recursive React renderer from a nested JSON document. Start with [problem.jsx](problem.jsx) and [document.json](document.json).

Copied from your existing exercise:

- [Mock API](nested-components.js): original fixture, returned after a two-second delay.
- [Earlier reference attempt](NestedComponents.reference.jsx): copied with its import adjusted. It mutates children and wraps text in divs, so treat it as an attempt to review after practicing.
- The JSON fixture is the input for both the starter and the working solution. Its heading text and logo are sample document content, not instructions for the exercise.

Original sources: [renderer](https://github.com/rogerprz/frontend-projects/blob/main/react-projects/use-context/src/Components/NestedComponents.js) and [fixture](https://github.com/rogerprz/frontend-projects/blob/main/react-projects/use-context/src/data/nested-components.js).

The fixture includes an Atlassian logo; the saved files do not establish official Atlassian interview provenance. This is supplemental Roblox preparation, not a confirmed Roblox question. A standalone Vite dev server is included; see the run instructions below.

## Interactive practice and solution

Run `npm install` once, then `npm run dev` from this folder. Open the URL printed by Vite. The page shows the exercise requirements and a working solution on first visit, then remembers your selected Practice or Solution view across refreshes. Select **Practice** to work on your existing starter, then compare behavior using **Solution**.

## Run

```sh
cd /Users/roger/Sites/frontend-projects/Roblox/17-json-to-react
npm install
npm run dev
```

Open the local URL printed by Vite. Edit `problem.jsx`; changes reload automatically. On first visit, Solution opens and renders `document.json` using `solution.jsx`. Select Practice to run your `problem.jsx`; its starter returns `null`, so that view has no document content until you implement it. Switching views resets component state. Run `npm run build` for a production build.
