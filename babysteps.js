var sum = 0

for (var i = 2; i < process.argv.length; i++) {
  sum += +process.argv[i];   // An array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.
}

console.log(sum)