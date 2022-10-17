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
  let assent = [];
  
if(Array.isArray(members)) {
    
  for(member of members) {
      
     if(typeof member === 'string') {
        
      assent.push(member.trim()[0].toUpperCase())
      }
    }
  return assent.sort().join('')
  }
return false
}

module.exports = {
  createDreamTeam
};
