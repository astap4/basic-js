const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj ={}
  names = names.map(elem => {
    let newelem = elem;
    if (obj[elem] > 0) {
      newelem = `${elem}(${obj[elem]})`;
    }
    obj[elem] = obj[elem] ? obj[elem] + 1 : 1;
    return newelem;
  });
  let unique = new Set(names)
  if (names.length === unique.length){
    return names;
  } else {
    const newArr = names.slice().sort()
    for (let i = 0; i<newArr.length; i++){
      if(newArr[i]===newArr[i-1]) {
        let indexToChange = names.lastIndexOf(newArr[i])
        names[indexToChange] = names[indexToChange] + '(1)'
      }
    }
  }
  return names
}

module.exports = {
  renameFiles
};
