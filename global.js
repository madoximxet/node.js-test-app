// variable to test with
var greet = 5+5;

//console.log(greet);

// test1
global.setTimeout(() => {
console.log('Timeout', greet);
}, 3000);

// test2
const int = setInterval(() => {
console.log('Interval', greet);
}, 1000);

// get folder/file path
console.log(__dirname);
console.log(__filename);