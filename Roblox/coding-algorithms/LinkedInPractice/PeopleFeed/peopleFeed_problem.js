/*
People feed — Mock interview exercise
Suggested time: 45 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/coding-algorithms/LinkedInPractice/PeopleFeed/peopleFeed.js | https://github.com/rogerprz/coding-algorithms/blob/main/LinkedInPractice/PeopleFeed/peopleFeed.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/coding-algorithms/LinkedInPractice/PeopleFeed/peopleFeed.js

Build a people-you-may-know widget using vanilla HTML, CSS, and JavaScript.
Use the provided PEOPLE_DATA below as a simulated API response.
Requirements:
1. Render the first two people on initial load with name, title, Connect, and Dismiss.
2. Load up to two additional people on each See more click, without duplicates.
3. While loading, disable See more and display Loading. Disable it when exhausted.
4. Connect immediately shows Pending, then Connected after a simulated delay.
5. Dismiss removes only the selected card. Repeated clicks must not duplicate work.
6. Support keyboard use and show an empty state when no cards remain.
Example: initial IDs [1,2]; See more appends [3,4], then [5].
You may add HTML/CSS in new files. Do not import the reference implementation.
Follow-up: how would you handle API failure and retry?

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/

const PEOPLE_DATA = [
  { id: 1, name: 'Sarah Chen', title: 'Product Designer' },
  { id: 2, name: 'Mike Johnson', title: 'Software Engineer' },
  { id: 3, name: 'Emma Wilson', title: 'Data Scientist' },
  { id: 4, name: 'Alex Turner', title: 'UX Lead' },
  { id: 5, name: 'Jessica Lee', title: 'Backend Engineer' }
];
// TODO: Build your widget here.
