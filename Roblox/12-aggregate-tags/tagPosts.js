/* Original: /Users/roger/Sites/coding-algorithms/LinkedInPractice/jsUI/tagPosts.js | https://github.com/rogerprz/coding-algorithms/blob/main/LinkedInPractice/jsUI/tagPosts.js */
const posts = [
  { id: 1, title: "Intro to JS", tags: ["js", "programming", "web"] },
  { id: 2, title: "Advanced CSS", tags: ["css", "web"] },
  { id: 3, title: "Node Tips", tags: ["js", "backend"] },
  { id: 4, title: "Design Systems", tags: ["css", "ui", "web"] },
  { id: 5, title: "React for Beginners", tags: ["js", "ui", "web"] },
];

// Expected outout
/**
 * [
  { tag: "js", count: 3, postIds: [1, 3, 5] },
  { tag: "web", count: 3, postIds: [1, 2, 4, 5] },
  { tag: "css", count: 2, postIds: [2, 4] },
  { tag: "ui", count: 2, postIds: [4, 5] },
  { tag: "backend", count: 1, postIds: [3] },
  { tag: "programming", count: 1, postIds: [1] }
]
 */
