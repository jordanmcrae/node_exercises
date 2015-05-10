var fs = require('fs') // File system: https://nodejs.org/api/fs.html

var name = process.argv[2];   // An array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.
var buffer = fs.readFile(name, 'utf8', function(err, data) { // Asynchronously reads the entire contents of a file, callback takes err and data where data is the contents of the file
  if (err) throw err;
  console.log(data.split('\n').length - 1)
});