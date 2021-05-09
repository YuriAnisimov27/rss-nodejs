const alphabet = require('../data/alphabet.json');

/**
 * Function decode a text by Caesar cipher
 * @param {String} str initial text
 * @param {Number} shift parameter indicates how many elements to shift
 * @returns {String} returns encoded text
 */
function decode(str, shift) {
  let res = '';
  for (let char of str) {
    const uppChar = char.toUpperCase();
    if (alphabet.includes(uppChar)) {
      const idx = alphabet.findIndex(el => el === uppChar);
      const ciphered =
        alphabet[(alphabet.length + idx - shift) % alphabet.length];
      const cipheredChar = uppChar === char ? ciphered : ciphered.toLowerCase();
      res += cipheredChar;
    } else {
      res += char;
    }
  }

  return res;
}

module.exports = decode;
