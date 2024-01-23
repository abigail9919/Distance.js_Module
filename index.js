// Import the module
const distance = require('./Distance');

console.log("30 feet is " + distance.calculate("feet", 30) + " meters");
console.log("30 meters is " + distance.calculate("meters", 30) + " feet");
console.log("30 miles is " + distance.calculate("miles", 30) + " kilometers");
console.log("30 kilometers is " + distance.calculate("kilometers", 30) + " miles");