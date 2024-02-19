const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const newMatrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    newMatrix[i] = new Array(columns).fill(0);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x < rows && x >= 0 &&  y < columns && y >= 0 &&  !(x === i && y === j)) {
            newMatrix[i][j] += matrix[x][y];
          }
        }
      }
    }
  }

  return newMatrix;
}

module.exports = {
  minesweeper
};
