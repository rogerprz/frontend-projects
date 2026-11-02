/* Original: /Users/roger/Sites/coding-algorithms/LinkedInPractice/jsUI/endorsement.js | https://github.com/rogerprz/coding-algorithms/blob/main/LinkedInPractice/jsUI/endorsement.js */
// Example provided in prep-book
const endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

function transformEndorsements(endorsements) {
  if (!endorsements || endorsements.length === 0) return [];

  const map = {};

  for (const { skill, user } of endorsements) {
    if (!(skill in map)) {
      map[skill] = { skill, users: [], count: 0 };
    }
    map[skill].users.push(user);
    map[skill].count++;
  }

  return Object.values(map).sort((a, b) => b.count - a.count);
}

//
console.log(transformEndorsements(endorsements));
/*
  {js: {
      skill: js 
      users: []
      }
  }
*/

//  [
//  { skill: 'javascript', users: ['Chad', 'Bill', 'Sue'], count:  3-},
//  { skill: 'css', users: ['Bill', 'Sue'], count:  2},
//  { skill: 'html', users:  ['Sue'], count:  1: },
// ]
