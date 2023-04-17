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
  let increase = options.addition||'';
  let increaseRecur = options.additionRepeatTimes||1;
  let increaseSeparator = options.additionSeparator||'|';
  let recur = options.repeatTimes||1;
  let delimiter = options.separator||'+';

  let incrsRepeat = '';
  for (let i = 0; i < increaseRecur; i++) {
    if (i === increaseRecur - 1) {
      incrsRepeat += increase;
      break;
    }
    incrsRepeat += increase + increaseSeparator;
  }

  let repeats = '';
  for (let i = 0; i < recur; i++) {
    if (i === recur - 1) {
      repeats += str + incrsRepeat;
      break;
    }
    repeats += str + incrsRepeat + delimiter;
  }
  return repeats;
}

module.exports = {
  repeater
};
