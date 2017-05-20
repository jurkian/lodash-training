// Map

let arr = [12, 5, 8, 130, 44];
let result;

// Lodash
result = _.map(arr, (el, index) => `Element ${index}: ${el}`);

// Native ES6
result = arr.map((el, index) => `Element ${index}: ${el}`);

console.log(result);