/*
LeetCode: 849. Maximize Distance to Closest Person
Difficulty: Medium
Official problem: https://leetcode.com/problems/maximize-distance-to-closest-person/
Maximize distance to closest person — Mock interview exercise
Suggested time: 25 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/leetcode-solutions/0849-maximize-distance-to-closest-person/0849-maximize-distance-to-closest-person.js | https://github.com/rogerprz/leetcode-solutions/blob/main/0849-maximize-distance-to-closest-person/0849-maximize-distance-to-closest-person.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/15-seat-distance/0849-maximize-distance-to-closest-person.js

Implement maxDistToClosest(seats).
seats is an array of 0 (empty) and 1 (occupied), with at least one of each.
Choose an empty seat to maximize distance to the nearest occupied seat.
Return that maximum distance; distance between indices i and j is abs(i-j).
Constraints: 2 <= seats.length <= 20000. Do not mutate seats.
Examples:
[1,0,0,0,1,0,1] -> 2
[0,0,0,1,0,1,0,1] -> 2
[0,0,0,1,0,1,0,1] start 
[1,0,0,0,1,0,1] mid 
[1,0,1,0,1,0,0,0] end 
[1,0,0,0] -> 3
[0,1] -> 1
Consider leading empty seats, trailing empty seats, and interior gaps.
Explain your time/space complexity and test boundary cases.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/
// INPUT EXAMPLES — ready to use; calls remain commented until you implement the problem.
const seatsExample = [1, 0, 0, 0, 1, 0, 1]; // Expected: 2
const seatsTrailingGap = [1, 0, 0, 0]; // Expected: 3
const seatsLeadingGap = [0, 0, 0, 1]; // Expected: 3
const seatsMinimum = [0, 1]; // Expected: 1
const seatsEvenGap = [1, 0, 0, 1]; // Expected: 1

function maxDistToClosest(seats) {
  const N = seats.length;
  let max = 0;
  let l = 0;

  return max;
}

console.log(maxDistToClosest(seatsExample));
