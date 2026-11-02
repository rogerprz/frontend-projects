/*
Implement debounce — Mock interview exercise
Suggested time: 25 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/asyncCallbacksPromises/debounce.js | https://github.com/rogerprz/coding-algorithms/blob/main/asyncCallbacksPromises/debounce.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/14-debounce/debounce.js

Implement debounce(fn, wait), returning a trailing-edge debounced function.
Requirements:
1. Call fn only after wait milliseconds have passed since the most recent call.
2. Use arguments and this from the most recent call.
3. Separate debounced functions must have independent timers.
4. Provide debounced.cancel() to discard a pending invocation.
5. Calling the wrapper does not return fn's eventual result; it returns undefined.
Assume fn is callable and wait is a nonnegative finite number. No utility libraries.
Example: at t=0 call d('a'), at t=50 call d('b'), wait=100:
fn runs once at approximately t=150 with 'b'. cancel before then prevents the call.
Explain closures and how you would test timing. Follow-up: add flush().

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

function debounce(fn, wait) {
  // TODO
}
