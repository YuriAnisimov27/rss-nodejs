const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const encode = require('./utils/encode');
const decode = require('./utils/decode');
const alphabet = require('./data/alphabet.json');
const handleError = require('./handleError');

/**
 * Function parsing command line for required datas
 * @returns {Object} with keys method, shift, input, output
 */
function parseCommandLine() {
  // const helpText = 'help';
  program.version('1.0.0', '-v, --version', 'output the current version');
  program
    .requiredOption('-s, --shift <integer number>', 'shift (is required)')
    .requiredOption(
      '-a, --action <encode/decode>',
      'action: encode/decode (is required)'
    )
    .option('-i, --input <path to input file>', 'input file')
    .option('-o, --output <path to output file>', 'output file');
  program.parse(process.argv);

  const options = program.opts();

  handleError(options.action, +options.shift, options.input);

  let input, output;

  if (options.input) {
    const pathToInputFile = path.join(__dirname, options.input);
    input = fs.createReadStream(pathToInputFile);
  } else {
    input = process.stdin;
  }

  if (options.output) {
    const pathToOutputFile = path.join(__dirname, options.output);
    output = fs.createWriteStream(pathToOutputFile, { flags: 'a' });
  } else {
    output = process.stdout;
  }

  const method = options.action === 'encode' ? encode : decode;
  const shift = Number(options.shift) % alphabet.length;

  return {
    method,
    shift,
    input,
    output,
  };
}

module.exports = parseCommandLine();
