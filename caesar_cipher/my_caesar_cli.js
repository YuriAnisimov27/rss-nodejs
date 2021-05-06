const { method, shift, input, output } = require('./parse_cl');

input.on('data', function (chunk) {
  output.write(method(chunk.toString(), shift));
});
