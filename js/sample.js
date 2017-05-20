// Sample

let arr = [1, 13.49, 12, 5, 132.2421, 130, 44.5];
let result;

// Lodash
// Works for arrays and objects
result = _.sample(arr);

// Native
result = arr[Math.floor(Math.random() * arr.length)];

console.log(result);