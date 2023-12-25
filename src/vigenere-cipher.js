const { NotImplementedError } = require("../extensions/index.js");

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

//  Encryption
//  The plaintext(P) and key(K) are added modulo 26.
//  Ei = (Pi + Ki) mod 26

//  Decryption
//  Di = (Ei - Ki + 26) mod 26

class VigenereCipheringMachine {
  #alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  #isDirect;

  constructor(isDirect = true) {
    this.#isDirect = isDirect;
  }

  #transform(str, key, encrypt) {
    if (!str || !key) throw new Error("Incorrect arguments!");

    str = str.toUpperCase();
    key = key.toUpperCase();

    const result = Array.from({ length: str.length }, (_, i) => {
      const strIdx = this.#alphabet.indexOf(str[i]);

      if (strIdx === -1) {
        key = key.substring(0, i) + str[i] + key.substring(i);
      }

      const keyIdx = this.#alphabet.indexOf(key[i]);
      const newIndex = encrypt ? (strIdx + keyIdx) % 26 : (strIdx - keyIdx + 26) % 26;

      return strIdx > -1 ? this.#alphabet[newIndex] : str[i];
    });

    return this.#isDirect ? result.join("") : result.reverse().join("");
  }

  encrypt(str, key) {
    return this.#transform(str, key, true);
  }

  decrypt(str, key) {
    return this.#transform(str, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
