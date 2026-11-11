/* Original: /Users/roger/Sites/tech-screen-solutions/roblox/scheduler.js | https://github.com/rogerprz/tech-screen-solutions/blob/main/roblox/scheduler.js */
// 4/17/25
// """
// Part 1:
//  is building a new feature that will let users create a schedule of experiences
// to play, represented as a list of experience IDs.
// To generate a schedule, we will ask each user to specify a map from unique experience
// IDs to the number of repetitions they want for each experience. For example:
//     Experience ID   Repetitions
//     -------------   -----------
//     12344           3
//     29308           2
//     99831           4
//     57782           1
//     27007           1
// In this case, we should generate a schedule with 11 entries total, and each experience
// ID should show up in the schedule with the given number of repetitions.
// However, we don't want users to have boring schedules, so we add the following
// constraint: In any schedule we generate, an experience ID should NOT show up twice in a
// row. For instance:
//     BAD:    [99831, 99831, 12344, 29308, 99831, ...]     (99831 shows up twice in a row)
//     GOOD:   [99831, 12344, 99831, 29308, 99831, ...]
// We cannot always satisfy this constraint. For example, say we had the following
// preference map:
//     Experience ID   Repetitions
//     -------------   -----------
//     12344           10
//     29308           1
//  BAD: [12344, 29308, 12344, 12344, 12344, 12344, 12344, 12344, 12344, 12344, 12344]
// The 29308 appears once, but all remaining slots are filled with 12344, leading to multiple consecutive occurrences of 12344.
// No matter what schedule we generate with the specified repetitions, it is guaranteed
// that 12344 will show up twice in a row.
// Given a map of a user's preferences, return whether it is POSSIBLE to generate a
// schedule satisfying the constraint. Constructing an actual schedule is NOT a
// requirement.
// """
// from typing import Dict
// def can_generate_schedule_with_constraint(preferences: Dict[int, int]) -> bool:
//     """Implementation of Part 1."""
//     return True  # TODO.
// example_preferences = {
//     12344: 3,
//     29308: 2,
//     99831: 4,
//     57782: 1,
//     27707: 1,
// }
// # Expected Output: True
// print(can_generate_schedule_with_constraint(example_preferences))
// # Other test cases...

console.log("Hello world");

// { a: 5, b: 1, c: 1 }
// 5, 1, 1, -> a ,b , a, c, a, a,  a
// { a: 3, b: 1, c: 1 }
// a, b, a, c, a
// if the max - 1 = sum of the rest
const badExample = {
  12344: 10,
  29308: 1,
};

const edgeCase = {
  a: 5,
  b: 4,
};
const canonicalExample = {
  12344: 3,
  29308: 2,
  99831: 4,
  57782: 1,
  27007: 1,
};
// part 1: fal
function isScheduleValid(items) {
  let maxCount = 0;
  let totalSum = 0;
  Object.values(items).forEach((reps) => {
    maxCount = Math.max(maxCount, reps);
    totalSum += reps;
  });
  totalSum -= maxCount;
  return maxCount - 1 <= totalSum;
}

console.log(isScheduleValid(canonicalExample));
console.log(isScheduleValid(badExample));
console.log(isScheduleValid(edgeCase));

// part 2:
//
// returns [] if not valid else [a, b, ...., n]
// """
// Part 2:
// Now write a function to generate a valid schedule. If we cannot generate a schedule
// satisfying our constraint, return null (or an equivalent value).
// """
function createSchedule(items) {
  // hash -> new Map
  if (!isScheduleValid(items)) {
    return [];
  }

  // Implement
  const res = [];
  // [c, b, d, e]
  const freq = [...Object.keys(items).sort((a, b) => items[b] - items[a])];
  /**
 * const canonicalExample = {
    c:           3,
    a:           2,
    b:           2,
    d:           1,
    e:           1
};

// Step 1:
{
    a: 4, 0
    b: 4, 1
    c: 3, 3
}
[a, b]
// Step 2: next iteration:
{
    a: 3,
    b: 3,
    c: 3
}
[a, b, 1/3 chance of b]

// We know:

// res[res.length - 1] --> b, and we have b, so how do we check that b === b?

 */
  while (freq.length >= 2) {
    // before we shift we want to check the shift letter is not the same as the top of the res.
    // .last() --> Option<T>
    // res = [] --> res[index] --> undefined
    while (res[res.length - 1] === freq[0]) {
      const reAdd = freq.shift();
      freq.push(reAdd);
    }
    const one = freq.shift();
    const two = freq.shift();

    res.push(one);
    res.push(two);

    if (--items[one] > 0) freq.push(one);
    if (--items[two] > 0) freq.push(two);

    freq.sort((a, b) => items[b] - items[a]);
  }

  // res: [a,12 ,c,  d]
  // [ a ]
  if (freq.length === 1) {
    res.push(freq[0]);
  }
  return res;
}

console.log(createSchedule(canonicalExample));
console.log(createSchedule(badExample));
console.log(createSchedule(edgeCase));
