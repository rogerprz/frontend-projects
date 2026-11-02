/*
Roblox experience scheduler — Mock interview exercise
Suggested time: 45 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/tech-screen-solutions/roblox/scheduler.js | https://github.com/rogerprz/tech-screen-solutions/blob/main/roblox/scheduler.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/14-experience-scheduler/scheduler.js

Users request repetitions of experience IDs. Generate a schedule with no adjacent equal IDs.
Input: an object mapping unique experience IDs to positive integer counts.
Part 1: implement canGenerateSchedule(preferences), returning whether this is possible.
Part 2: implement generateSchedule(preferences), returning any valid array, or null if impossible.
Include every requested occurrence exactly once. IDs in the result are strings.
Do not mutate input. Empty preferences is feasible and produces [].
Examples:
{a:3,b:2} -> true; one possible schedule is ['a','b','a','b','a'].
{a:4,b:1} -> false; generated result is null.
{a:1} -> true; ['a'].
Explain why your feasibility check is correct and give construction complexity.
Test counts and adjacent values instead of asserting one exact valid ordering.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

function canGenerateSchedule(preferences) {
  // TODO: Part 1
}

function generateSchedule(preferences) {
  // TODO: Part 2
}
