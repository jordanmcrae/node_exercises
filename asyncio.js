var fs = require('fs')

var name = process.argv[2];
var buffer = fs.readFile(name, 'utf8', function(err, data) {
  if (err) alert("Error!");
  console.log(data.split('\n').length - 1)
});