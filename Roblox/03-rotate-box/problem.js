/*
LeetCode: 1861. Rotating the Box
Difficulty: Medium
Official problem: https://leetcode.com/problems/rotating-the-box/
Rotate the box — Mock interview exercise
Suggested time: 35 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/leetcode-solutions/1861-rotating-the-box/1861-rotating-the-box.js
GH: https://github.com/rogerprz/leetcode-solutions/blob/main/1861-rotating-the-box/1861-rotating-the-box.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/03-rotate-box/1861-rotating-the-box.js

Implement rotateTheBox(boxGrid).
Input is a nonempty m-by-n matrix: '#' stone, '*' fixed obstacle, '.' empty.
Rotate the box 90 degrees clockwise, then let stones fall downward under gravity.
A stone stops at an obstacle, another stone, or the bottom boundary.
Return the final n-by-m matrix. Obstacles remain fixed relative to the rotated box.
Do not mutate input. Assume 1 <= m,n <= 500.
Examples:
[['#','.','#']] -> [['.'],['#'],['#']]
[['#','*','.']] -> [['#'],['*'],['.']]
[['.','.']] -> [['.'],['.']]
Handle multiple obstacle-separated regions, empty regions, and rectangular matrices.
Explain your coordinate mapping and time/space complexity.

Before coding: clarify assumptions and describe your approach out loud.
Before finishing: try examples and edge cases; discuss complexity/tradeoffs.
*/
/* 
const STONE = "#"
const WALL = "*"
const boxGrid1 =   [["#",".","#"]]
              Out: [["."],
                    ["#"],
                    ["#"]]
const boxGrid2 = [["#",".","*","."],
                   ["#","#","*","."]]
            Out: [["#","."],
                  ["#","#"],
                  ["*","*"],
                  [".","."]]
*/
function rotateTheBox(boxGrid) {
  let rows = boxGrid.length;
  let cols = boxGrid[0].length;
  const STONE = '#';
  const WALL = '*';
  console.log('B:', boxGrid);
  let dp = new Array(cols).fill(0).map(() => new Array(rows).fill('.'));
  console.log('DP:', dp);

  for (let row = 0; row < rows; row++) {
    let currColIdx = cols - 1;
    for (let col = cols - 1; col >= 0; col--) {
      let currRowIdx = rows - 1 - row;
      const curr = boxGrid[row][col];
      if (curr === STONE) {
        dp[currColIdx][currRowIdx] = curr;
        currColIdx--;
      }
      if (curr === WALL) {
        dp[col][currRowIdx] = curr;
        currColIdx = col - 1;
      }
    }
  }
  return dp;
}

// INPUT EXAMPLES — ready to use; calls remain commented until you implement the problem.
const boxExample = [['#', '.', '#']]; // Expected: [['.'], ['#'], ['#']]
const boxWithObstacle = [['#', '*', '.']]; // Expected: [['#'], ['*'], ['.']]
const boxEmpty = [['.', '.']]; // Expected: [['.'], ['.']]
const boxRectangular = [
  ['#', '.', '*', '.'],
  ['#', '#', '*', '.']
]; // Expected: [['#', '.'], ['#', '#'], ['*', '*'], ['.', '.']]

console.log(rotateTheBox(boxExample));
