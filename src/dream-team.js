const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let team = '';
  if(Array.isArray(members)){
  console.log(Array.isArray(members))
  members.forEach((item, index, array) => {
    if (typeof item === 'string' && item.length!=0){
      if(item[0]!=' ')
      team += item.toUpperCase()[0];
      else {
        for (let i =0; i<item.length; i++){
           if (item[i] != ' '){
             team += item[i].toUpperCase()
                break}
        }
      }
    }
  });
  }
  if (team.length === 0)
      return false   
  else  
      return team.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
