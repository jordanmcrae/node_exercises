var fs = require('fs')

var name = process.argv[2]; // An array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

var buffer = fs.readFileSync(name);  // Synchronous version of fs.readFile. Returns the contents of the filename. If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.

var string = buffer.toString(); // Converts buffer to string (A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.)

console.log(string.split('\n').length - 1)



