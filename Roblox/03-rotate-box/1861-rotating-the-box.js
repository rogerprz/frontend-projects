/*
LeetCode: 1861. Rotating the Box
Difficulty: Medium
Official problem: https://leetcode.com/problems/rotating-the-box/
*/

/* Original: /Users/roger/Sites/leetcode-solutions/1861-rotating-the-box/1861-rotating-the-box.js
https://github.com/rogerprz/leetcode-solutions/blob/main/1861-rotating-the-box/1861-rotating-the-box.js 

LC: https://leetcode.com/problems/rotating-the-box/description/
*/
/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
  let rows = boxGrid.length;
  let cols = boxGrid[0].length;

  let res = new Array(cols).fill(0).map(() => new Array(rows).fill('.'));
  const STONE = '#';
  const WALL = '*';

  for (let row = 0; row < rows; row++) {
    let landingRow = cols - 1;
    for (let col = cols - 1; col >= 0; col--) {
      let resultCol = rows - 1 - row;
      const curr = boxGrid[row][col];
      if (curr === STONE) {
        res[landingRow][resultCol] = curr;
        landingRow--;
      }
      if (curr === WALL) {
        res[col][resultCol] = curr;
        landingRow = col - 1;
      }
    }
  }

  return res;
};
