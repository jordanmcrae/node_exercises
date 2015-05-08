var fs = require('fs')

var name = process.argv[2];

var buffer = fs.readFileSync(name);

var string = buffer.toString();

console.log(string.split('\n').length - 1)



