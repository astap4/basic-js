const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  domains.forEach((item,index) => {
    let arr = item.split('.').reverse().map((e) => "." + e);
    let res = arr[0]
    let newArr = [];
    for (let i = 0; i<arr.length; i++){    
      newArr[i] = res;
      res += arr[i+1]
    }
    console.log(newArr)
    newArr.forEach(item => {
      let count = obj[item];
      if (count) {
        obj[item] = count + 1;
      } else {
        obj[item] = 1;
      }
    });
  })
  return obj;
}


module.exports = {
  getDNSStats
};
