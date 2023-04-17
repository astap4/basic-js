const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next duplicates the next element of the array in the transformed array.
// --double-prev duplicates the previous element of the array in the transformed array.
function transform(arr) {
  const newArr = [];
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (arr[i - 2] !== '--discard-next' && i > 0) {
          newArr.pop();
        }
        break;
      case '--discard-next':
        i++;
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          newArr.push(arr[i - 1]);
        }
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        break;

      default:
        if (arr[i - 1] !== '--discard-next' && i < arr.length) {
          newArr.push(arr[i]);
        }
    }
  }

  return newArr;
}

module.exports = {
  transform
};
