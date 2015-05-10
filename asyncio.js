var fs = require('fs')

var name = process.argv[2];   // An array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.
var buffer = fs.readFile(name, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data.split('\n').length - 1)
});