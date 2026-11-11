/* Original: /Users/roger/Sites/coding-algorithms/Javascript/AsyncPromises/rateLimiting.js | https://github.com/rogerprz/coding-algorithms/blob/main/Javascript/AsyncPromises/rateLimiting.js */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-await-in-loop */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithRateLimit(urls, maxConcurrent = 3, delayMs = 1000) {
  const results = [];

  for (let i = 0; i < urls.length; i++) {
    const batch = urls.slice(i, i + maxConcurrent);

    const batchPromises = batch.map((url) =>
      fetch(url).then((res) => res.json()),
    );
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    console.log(
      `Fetched ${batch.length} URLs:`,
      batch,
      "Waiting for next batch...",
    );
    i += maxConcurrent - 1; // Adjust index to skip the already processed URLs
    await delay(delayMs);
  }
  return results;
}

fetchWithRateLimit(
  [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/posts/5",
  ],
  2,
  2000,
).then((results) => console.log(results));
