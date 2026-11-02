/*
Product page with independent requests — Mock interview exercise
Suggested time: 45 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/practice/multiFetchReact.tsx | https://github.com/rogerprz/coding-algorithms/blob/main/practice/multiFetchReact.tsx
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/10-product-api-requests/multiFetchReact.tsx

Build a React ProductDetailsPage({ productId, api }) component.
API contract (inject mocks instead of making real network calls):
api.getInfo(id, { signal }) -> Promise<{ name: string, description: string }>
api.getReviews(id, { signal }) -> Promise<Array<{ id: string, text: string }>>
api.getRelated(id, { signal }) -> Promise<Array<{ id: string, name: string }>>
Requirements:
1. Start all three requests concurrently for the current productId.
2. Each section has independent loading, success, empty, and error UI.
3. Failed sections have a Retry button; retry only that section.
4. On productId change, clear old product content and start the new requests.
5. Prevent responses for old products from overwriting current content.
6. Cancel requests on product change/unmount; an abort must not appear as an error.
7. Failed reviews must not hide successful product info or related products.
Example: product A is slow, switch to B; A resolving later cannot replace B.
Follow-up: add up to three retries with backoff and cancellable timers.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

// TODO: Implement ProductDetailsPage and API mocks here.
