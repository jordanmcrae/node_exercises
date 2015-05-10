var fs = require('fs')
var path = require('path')

var directory = process.argv[2];    // An array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

fs.readdir(directory, function(err, contents) {   // Asynchronous readdir(3). Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
  if (err) throw err;
  contents.forEach(function(f) {   // 'forEach' executes a provided function once per array element
    if (path.extname(f) === '.' + process.argv[3])
      console.log(f);
  });
});