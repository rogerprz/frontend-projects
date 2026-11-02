/*
Implement array reduce — Mock interview exercise
Suggested time: 30 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/JsPrototype/reduce.js | https://github.com/rogerprz/coding-algorithms/blob/main/JsPrototype/reduce.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/16-array-reduce/reduce.js

Implement myReduce(array, callback, initialValue?) without using native reduce.
Use a standalone function; do not modify Array.prototype.
Requirements:
1. Visit present array entries in ascending index order; skip sparse holes.
2. callback receives accumulator, value, index, and the original array.
3. With initialValue supplied, use it even if explicitly undefined.
4. Without initialValue, use the first present value and start callbacks after it.
5. Throw TypeError for an empty/all-hole array without initialValue.
6. An empty array with initialValue returns that initialValue.
7. Throw TypeError when callback is not callable. Do not mutate the input yourself.
Assume the input is an Array and callbacks do not change its length or entries.
Examples: myReduce([1,2,3], (a,b)=>a+b, 0) -> 6.
myReduce([], (a,b)=>a+b, 5) -> 5; myReduce([], fn) throws.
Follow-up: discuss native reduce behavior when callbacks mutate the array.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

function myReduce(array, callback, initialValue) {
  // TODO
}
