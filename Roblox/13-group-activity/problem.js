/*
Group activity by date and user — Mock interview exercise
Suggested time: 25 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/LinkedInPractice/jsUI/mergeByDate.js | https://github.com/rogerprz/coding-algorithms/blob/main/LinkedInPractice/jsUI/mergeByDate.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/13-group-activity/mergeByDate.js

Implement groupActivity(logs).
Input: [{ user: string, action: string, date: 'YYYY-MM-DD' }]. Dates are valid.
Output: [{ date, users: [{ user, actions: string[], count: number }] }].
Sort date groups ascending. Within each date, retain first-seen user order.
Preserve action occurrence order and duplicates for each user. Do not mutate input.
An empty array returns []. Inputs are not necessarily sorted by date.
Example:
Input: [{user:'A',action:'login',date:'2026-11-02'},
        {user:'A',action:'view',date:'2026-11-02'}]
Output: [{date:'2026-11-02',users:[{user:'A',actions:['login','view'],count:2}]}]
Explain complexity. Follow-up: how would you group timestamps in a user's timezone?

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

function groupActivity(logs) {
  // TODO
}

// INPUT EXAMPLES — ready to use; calls remain commented until you implement the problem.
const logsExample = [
  { user: 'A', action: 'login', date: '2026-11-02' },
  { user: 'A', action: 'view', date: '2026-11-02' }
]; // Expected: one date/user group with actions ['login', 'view'] and count 2
const logsEmpty = []; // Expected: []
const logsUnsorted = [
  { user: 'Bob', action: 'login', date: '2026-11-03' },
  { user: 'Alice', action: 'view', date: '2026-11-02' },
  { user: 'Bob', action: 'view', date: '2026-11-02' },
  { user: 'Alice', action: 'view', date: '2026-11-02' }
]; // Dates: 02 then 03; on 02 users: Alice then Bob; Alice's count: 2

// console.log(groupActivity(logsExample));
