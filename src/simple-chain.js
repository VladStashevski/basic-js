const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  innerArray: [],

  getLength() {
    return this.innerArray.length;
  },

  addLink(value) {
    this.innerArray.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.innerArray.length) {
      this.innerArray.splice(position - 1, 1);
      return this;
    }
    this.innerArray = [];
    throw new Error("You can't remove incorrect link!");
  },

  reverseChain() {
    this.innerArray.reverse();
    return this;
  },

  finishChain() {
    const result = this.innerArray.join("~~");
    this.innerArray = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};

