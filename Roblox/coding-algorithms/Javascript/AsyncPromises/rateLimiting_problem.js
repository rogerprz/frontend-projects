/*
Fetch with bounded concurrency — Mock interview exercise
Suggested time: 35 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/Javascript/AsyncPromises/rateLimiting.js | https://github.com/rogerprz/coding-algorithms/blob/main/Javascript/AsyncPromises/rateLimiting.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/coding-algorithms/Javascript/AsyncPromises/rateLimiting.js

Implement fetchWithConcurrency(urls, limit, fetchFn).
fetchFn(url) returns a Promise for that URL's result. Inject it for testing.
Requirements:
1. At most limit requests may be in flight at once.
2. Start a waiting request as soon as a slot becomes free.
3. Return a Promise for results in original URL order, regardless of completion order.
4. Each result is {status:'fulfilled',value} or {status:'rejected',reason}.
5. One rejection must not prevent remaining URLs from being attempted.
6. [] resolves to []; reject invalid limits (not positive integers).
7. Treat repeated URLs as separate work items. Do not mutate urls.
Example: [A,B,C], limit=2; start A/B, then C when either finishes.
Explain batching versus a continuously filled concurrency pool.
Follow-up: support cancellation with AbortSignal.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

async function fetchWithConcurrency(urls, limit, fetchFn) {
  // TODO
}
