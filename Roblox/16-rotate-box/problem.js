/*
LeetCode: 1861. Rotating the Box
Difficulty: Medium
Official problem: https://leetcode.com/problems/rotating-the-box/
Rotate the box — Mock interview exercise
Suggested time: 35 minutes
Adapted practice prompt; not an official current Roblox assessment.
Original: /Users/roger/Sites/leetcode-solutions/1861-rotating-the-box/1861-rotating-the-box.js
GH: https://github.com/rogerprz/leetcode-solutions/blob/main/1861-rotating-the-box/1861-rotating-the-box.js
Reference copy (open after attempting): /Users/roger/Sites/frontend-projects/Roblox/16-rotate-box/1861-rotating-the-box.js

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
  const WALL = '*';
  const STONE = '#';

  let rows = boxGrid.length;
  let cols = boxGrid[0].length;

  const res = new Array(cols).fill(0).map(() => new Array(rows).fill('.'));
  console.log('R:', res);
  for (let row = 0; row < rows; row++) {
    let endRowIdx = cols - 1;

    for (let col = cols - 1; col >= 0; col--) {
      let endColIdx = rows - row - 1;
      const curr = boxGrid[row][col];

      if (curr === STONE) {
        res[endRowIdx][endColIdx] = STONE;
        endRowIdx--;
      } else if (curr === WALL) {
        res[col][endColIdx] = WALL;

        endRowIdx = col - 1;
      }
    }
  }
  return res;
}

// INPUT EXAMPLES — ready to use; calls remain commented until you implement the problem.
const boxExample = [['#', '.', '#']]; // Expected: [['.'], ['#'], ['#']]
const boxWithObstacle = [['#', '*', '.']]; // Expected: [['#'], ['*'], ['.']]
const boxEmpty = [['.', '.']]; // Expected: [['.'], ['.']]
const boxRectangular = [
  ['#', '.', '*', '.'],
  ['#', '#', '*', '.']
]; // Expected: [['#', '.'], ['#', '#'], ['*', '*'], ['.', '.']]

rotateTheBox(boxExample).map((row) => console.log(row));
