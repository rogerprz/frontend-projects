/*
Fetch with bounded concurrency — Mock interview exercise
Suggested time: 35 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/Javascript/AsyncPromises/rateLimiting.js | https://github.com/rogerprz/coding-algorithms/blob/main/Javascript/AsyncPromises/rateLimiting.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/09-request-concurrency/rateLimiting.js

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

// INPUT EXAMPLES — ready to use; calls remain commented until you implement the problem.
const urlsExample = ["A", "B", "C"];
const limitExample = 2;
const emptyUrls = [];
const duplicateUrls = ["A", "A", "B"];
const invalidLimits = [0, -1, 1.5, NaN];
const mockResponses = {
  A: { delayMs: 80, value: "Result A" },
  B: { delayMs: 20, value: "Result B" },
  C: { delayMs: 10, error: "Request C failed" },
};
// Fixture only: simulates requests; does not implement concurrency scheduling.
const requestEvents = [];
function mockFetch(url) {
  const response = mockResponses[url];
  requestEvents.push({ event: "start", url });
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        requestEvents.push({ event: "finish", url });
        if (!response) reject(new Error(`Unknown URL: ${url}`));
        else if (response.error) reject(new Error(response.error));
        else resolve(response.value);
      },
      response ? response.delayMs : 0,
    );
  });
}
// Expected result order: fulfilled A, fulfilled B, rejected C.
// With limit 2, C starts after B finishes while A is still in flight.
// fetchWithConcurrency(urlsExample, limitExample, mockFetch).then(console.log);
// Clear requestEvents.length = 0 before repeating an observation.
