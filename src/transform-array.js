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
  const copyArr = arr.slice();
  const newArr =[];
  const control1 = '--discard-next';
  const control2 = '--discard-prev';
  const control3 = '--double-next';
  const control4 = '--double-prev';

  // let arr = [1, 2];
  // alert( arr.concat([3, 4]) ); 
  // 1,2,3,4
  for (let i =0; i < arr.length; i++) {
    if(arr[i] === control1) {
      copyArr.splice(i, 2);
    }
    if(arr[i] === control2) {
      newArr.push(splice(i - 1, 2));
    }
  }
}

module.exports = {
  transform
};
