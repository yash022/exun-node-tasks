// solution to problem 2 
var fs = require('fs');
const myArgs = process.argv.slice(2);
const fileContents = fs.readFileSync("example.txt");
var data = fileContents.toString();
console.log(data.includes(myArgs[0]));

