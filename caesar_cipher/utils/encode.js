const alphabet = require('../data/alphabet.json');

/**
 * Function encode a text by Caesar cipher
 * @param {String} str initial text
 * @param {Number} shift parameter indicates how many elements to shift
 * @returns {String} returns decoded text
 */
function encode(str, shift) {
  let res = '';
  for (let char of str) {
    const uppChar = char.toUpperCase();
    if (alphabet.includes(uppChar)) {
      const idx = alphabet.findIndex(el => el === uppChar);
      const ciphered =
        alphabet[(idx + shift + alphabet.length) % alphabet.length];
      const cipheredChar = uppChar === char ? ciphered : ciphered.toLowerCase();
      res += cipheredChar;
    } else {
      res += char;
    }
  }

  return res;
}

module.exports = encode;
