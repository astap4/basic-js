const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (isdirect) {
    this.keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.isdirect = isdirect === false ? false : true
  }

  encrypt(input, key) {
    if (input === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const inputArr = input.split('').map(item => {
      const upperItem = item.toUpperCase();
      return this.keys.indexOf(upperItem) !== -1 ? this.keys.indexOf(upperItem) : item;
    });
    const keyArr = key.split('').map(item => this.keys.indexOf(item.toUpperCase()))
    const newSumArr = []
    let keyCounter = 0
    for (let i = 0; i < inputArr.length; i++) {
      if(typeof inputArr[i] !== 'number') {
        newSumArr[i] = inputArr[i]
      } else {
        if (keyCounter >= keyArr.length) {
          keyCounter = 0
        }
        let sum= inputArr[i] + keyArr[keyCounter]
        if (sum >= this.keys.length) {
          sum = sum % this.keys.length
        }
        newSumArr[i] = sum;
        keyCounter ++;
      }
    }

    const output = newSumArr.map((item,index) => {
      if (!isNaN(input[index]) && input[index] !== ' ') {
        return input[index]
      } else if (!(this.keys[item])) {
        return item
      } else 
        return this.keys[item]
    })

    return this.isdirect ? output.join('') : output.reverse().join('');
  }
  decrypt(input, key) {
    if (input === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const inputArr = input.split('').map(item => (this.keys.indexOf(item.toUpperCase()) !== -1) ? this.keys.indexOf(item.toUpperCase()) : item);
    const keyArr = key.split('').map(item => this.keys.indexOf(item.toUpperCase()));
    const newDiffArr = [];
    let keyCounter = 0;

    for (let i = 0; i < inputArr.length; i++) {
      if (typeof inputArr[i] !== 'number') {
        newDiffArr[i] = inputArr[i];
      } else {
        if (keyCounter >= keyArr.length) {
          keyCounter = 0;
        }
        let diff = inputArr[i] - keyArr[keyCounter];
        if (diff < 0) {
          diff = this.keys.length + diff;
        }
        newDiffArr[i] = diff;
        keyCounter++;
      }
    }

    const output = newDiffArr.map(item => (this.keys[item]) ? this.keys[item] : item);
    return this.isdirect ? output.join('') : output.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
