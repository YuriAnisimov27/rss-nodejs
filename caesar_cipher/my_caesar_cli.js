const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const encode = require('./encode');
const decode = require('./decode');
const alphabet = require('./alphabet.json');

program.version('1.0.0', '-v, --version', 'output the current version');

program
  .requiredOption('-s, --shift <type>', 'The shift is required')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file')
  .requiredOption('-a, --action <type>', 'Action (encode/decode) is required');

program.parse(process.argv);

const options = program.opts();
if (options.shift) console.log(`- shift: ${options.shift}`);
if (options.input) console.log(`- input file: ${options.input}`);
if (options.output) console.log(`- output file: ${options.output}`);
if (options.action) console.log(`- action: ${options.action}`);

const pathToInputFile = path.join(__dirname, options.input);
const pathToOutputFile = path.join(__dirname, options.output);

const readable = fs.createReadStream(pathToInputFile);
const writeable = fs.createWriteStream(pathToOutputFile);

const method = options.action === 'encode' ? encode : decode;

readable.on('data', function (chunk) {
  const shift = Number(options.shift) % alphabet.length;
  writeable.write(method(chunk.toString(), shift));
});
