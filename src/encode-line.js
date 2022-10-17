const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let total = '';
  
for (let i = 0; i < str.length; i++) {
  let counter = 1;
    
    let type = str[i];

    while (type === str[i+1]){
      counter ++
      i++
  }

  if(counter === 1) {
      
     total = total.concat(`${type}`)
    } else {
     
      total = total.concat(`${counter}${type}`)
   }
}
  
  return total
}

module.exports = {
  encodeLine
};
