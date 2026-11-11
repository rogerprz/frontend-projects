# Product page with independent requests

Runnable unsolved React practice. Implement [`problem.tsx`](problem.tsx); the browser displays the starter and expandable requirements. Reference files remain separate and are not mounted.

```sh
cd /Users/roger/Sites/frontend-projects/Roblox/05-product-api-requests
npm install
npm run dev
```

Run `npm run build` to verify compilation. Vite transpiles TSX; this is not a TypeScript type check. Local API fixtures in `src/mockAPI.js` support abort signals, slow A responses, failed B reviews, and empty C lists.

In this checkout, `node_modules` links to exercise 01’s installed dependencies. For an independent install, remove that symlink and run `npm install`.

## Interactive practice and solution

Run `npm install` once, then `npm run dev` from this folder. Open the URL printed by Vite. The page shows the exercise requirements and a working solution by default. Select **Practice** to work on your existing starter, then compare behavior using **Solution**.
