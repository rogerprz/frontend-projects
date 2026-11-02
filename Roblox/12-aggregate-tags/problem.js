/*
Aggregate post tags — Mock interview exercise
Suggested time: 20 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/LinkedInPractice/jsUI/tagPosts.js | https://github.com/rogerprz/coding-algorithms/blob/main/LinkedInPractice/jsUI/tagPosts.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/12-aggregate-tags/tagPosts.js

Implement aggregateTags(posts).
Input: [{ id: number, title: string, tags: string[] }], with unique post IDs.
Output: [{ tag, count, postIds }], sorted by count descending, then tag alphabetically.
Count the number of distinct posts per tag; repeated tags in one post count once.
Preserve input post order in postIds. Do not mutate input. Empty input returns [].
Example:
Input: [{id:1,title:'A',tags:['web','js','web']}, {id:2,title:'B',tags:['web']}]
Output: [{tag:'web',count:2,postIds:[1,2]}, {tag:'js',count:1,postIds:[1]}]
Handle posts with no tags. Explain your time/space complexity.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

function aggregateTags(posts) {
  // TODO
}

// INPUT EXAMPLES — ready to use; calls remain commented until you implement the problem.
const postsExample = [
  { id: 1, title: 'A', tags: ['web', 'js', 'web'] },
  { id: 2, title: 'B', tags: ['web'] }
]; // Expected: web -> count 2 / [1,2]; js -> count 1 / [1]
const postsEmpty = []; // Expected: []
const postsWithoutTags = [{ id: 1, title: 'Untagged', tags: [] }]; // []
const postsTiedTags = [{ id: 1, title: 'A', tags: ['web', 'css'] }];
// Expected tied tag order: css, web

// console.log(aggregateTags(postsExample));
