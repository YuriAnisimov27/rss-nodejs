const fs = require('fs');
const path = require('path');

/**
 * Function returns custom errors except defaults. Validates action method, shift and is input file exists
 * @param {String} method
 * @param {Number} shift
 * @param {String} input
 * @returns {Error | void} returns error in stderr or void
 */
function handleError(method, shift, input) {
  const methods = ['encode', 'decode'];
  if (!methods.includes(method)) {
    process.stderr.write('Action (encode/decode) is required \n');
    process.exit(1);
  }

  if (!Number.isInteger(shift)) {
    process.stderr.write('Shift is required and should be integer \n');
    process.exit(1);
  }

  if (input) {
    if (!fs.existsSync(path.join(__dirname, input))) {
      process.stderr.write('Input file is missed \n');
      process.exit(1);
    }
  }
}

module.exports = handleError;
