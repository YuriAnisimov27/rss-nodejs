const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const encode = require('./utils/encode');
const decode = require('./utils/decode');
const alphabet = require('./data/alphabet.json');

program.version('1.0.0', '-v, --version', 'output the current version');
program
  .requiredOption('-s, --shift <type>', 'The shift is required')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file')
  .requiredOption('-a, --action <type>', 'Action (encode/decode) is required');
program.parse(process.argv);

const options = program.opts();

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

input.on('data', function (chunk) {
  output.write(method(chunk.toString(), shift));
});
