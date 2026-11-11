# Product page with independent requests

Runnable unsolved React practice. Implement [`problem.tsx`](problem.tsx); the browser displays the starter and expandable requirements. Reference files remain separate and are not mounted.

```sh
cd /Users/roger/Sites/frontend-projects/Roblox/10-product-api-requests
npm install
npm run dev
```

Run `npm run build` to verify compilation. Vite transpiles TSX; this is not a TypeScript type check. Local API fixtures in `src/mockAPI.js` support abort signals, slow A responses, failed B reviews, and empty C lists.

In this checkout, `node_modules` links to exercise 06’s installed dependencies. For an independent install, remove that symlink and run `npm install`.
