/*
Group endorsements — Mock interview exercise
Suggested time: 20 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/LinkedInPractice/jsUI/endorsement.js | https://github.com/rogerprz/coding-algorithms/blob/main/LinkedInPractice/jsUI/endorsement.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/11-group-endorsements/endorsement.js

Implement transformEndorsements(endorsements).
Input: an array of { skill: string, user: string } records.
Output: [{ skill, users, count }], grouped by skill and sorted by descending count.
Preserve user occurrence order within each group. Each record counts, including duplicates.
For ties, retain the order in which skills first appeared. Do not mutate input.
An empty array returns []. Skill/user names may be arbitrary strings.
Example:
Input: [{skill:'css',user:'A'}, {skill:'js',user:'B'}, {skill:'js',user:'A'}]
Output: [{skill:'js',users:['B','A'],count:2}, {skill:'css',users:['A'],count:1}]
Discuss time/space complexity. Follow-up: count each user at most once per skill.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

function transformEndorsements(endorsements) {
  // TODO
}

// INPUT EXAMPLES — ready to use; calls remain commented until you implement the problem.
const endorsementsExample = [
  { skill: 'css', user: 'A' },
  { skill: 'js', user: 'B' },
  { skill: 'js', user: 'A' }
]; // Expected: js -> ['B', 'A'] / 2; css -> ['A'] / 1
const endorsementsEmpty = []; // Expected: []
const endorsementsDuplicates = [
  { skill: 'css', user: 'A' },
  { skill: 'css', user: 'A' }
]; // Expected: [{ skill: 'css', users: ['A', 'A'], count: 2 }]
const endorsementsTied = [
  { skill: 'css', user: 'A' },
  { skill: 'js', user: 'B' }
]; // Expected skill order: css, js
const endorsementsSpecialNames = [{ skill: '__proto__', user: 'A' }];
// Expected: one group whose skill is '__proto__'.

// console.log(transformEndorsements(endorsementsExample));
