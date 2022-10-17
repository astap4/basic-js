const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if(str === null){
    str='null'
  }
  if(options.addition === null){
    options.addition='null'
  }   
     if(typeof str != 'string'){
    str.toString()
  } 
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
  if (options.separator === undefined) {
    options.separator = '+'
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  let arr = []
  for (let i = 0; i < options.repeatTimes; i++) {
    arr.push(str)
    let arrAdd = []
    for (let j = 0; j < options.additionRepeatTimes; j++){     
      arrAdd.push(options.addition)
    }
    arr[i]+= arrAdd.join(options.additionSeparator)
  }
  return arr.join(options.separator)
 }


module.exports = {
  repeater
};
