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
  const STONE = '#';
  const WALL = '*';
  const rows = boxGrid.length;
  const cols = boxGrid[0].length;

  // A 2×4 box becomes 4×2 after rotation, so the result needs cols rows.
  // Separate arrays prevent changing one result row from changing another.
  const result = Array.from({ length: cols }, () => Array(rows).fill('.'));

  // Process each original row independently because rotation turns it into one column.
  // Stones fall within that column, so they cannot interact with other original rows.
  for (let row = 0; row < rows; row++) {
    // Clockwise rotation moves the top row to the rightmost column.
    // Subtracting from rows - 1 reverses the order: row 0 → last column.
    const endColIdx = rows - 1 - row;

    // Gravity pulls stones toward the largest result-row index: the bottom.
    // Initially nothing is placed, so that bottom cell is available.
    let endRowIdx = cols - 1;

    // After rotation, original column col becomes result row col.
    // Scan largest col first to place lower stones before stones that stack above them.
    for (let col = cols - 1; col >= 0; col--) {
      const curr = boxGrid[row][col];

      if (curr === STONE) {
        // The stone falls to endRowIdx because everything below it is blocked or outside.
        // Using col instead would rotate the stone without letting it fall.
        result[endRowIdx][endColIdx] = STONE;

        // This position is now occupied, so another stone must stop one row above.
        // Moving the pointer avoids searching downward separately for every stone.
        endRowIdx--;
      } else if (curr === WALL) {
        // A wall cannot fall, so use its exact rotated coordinates: [col][endColIdx].
        // Using endRowIdx would incorrectly move the wall from its fixed position.
        result[col][endColIdx] = WALL;

        // Stones still to process will rotate above this wall and cannot pass through it.
        // Reset to the cell directly above it, even if space remains below the wall.
        endRowIdx = col - 1;
      }

      // Empty cells stay "." because we initialized the entire result with ".".
      // They do not consume landing space, so endRowIdx stays unchanged.
    }
  }

  // Rotation and gravity were handled together while writing each result column.
  return result;
};
