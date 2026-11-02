/* Original: /Users/roger/Sites/coding-algorithms/LinkedInPractice/jsUI/mergeByDate.js | https://github.com/rogerprz/coding-algorithms/blob/main/LinkedInPractice/jsUI/mergeByDate.js */
const logs = [
  { user: 'Alice', action: 'login', date: '2025-10-17' },
  { user: 'Bob', action: 'view', date: '2025-10-17' },
  { user: 'Alice', action: 'view', date: '2025-10-17' },
  { user: 'Alice', action: 'logout', date: '2025-10-17' },
  { user: 'Bob', action: 'login', date: '2025-10-18' },
  { user: 'Alice', action: 'login', date: '2025-10-18' }
];

// Expected output:
/**
 * [
  {
    date: "2025-10-17",
    users: [
      { user: "Alice", actions: ["login", "view", "logout"], count: 3 },
      { user: "Bob", actions: ["view"], count: 1 }
    ]
  },
  {
    date: "2025-10-18",
    users: [
      { user: "Bob", actions: ["login"], count: 1 },
      { user: "Alice", actions: ["login"], count: 1 }
    ]
  }
];

 */
