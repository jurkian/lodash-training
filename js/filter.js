// Filter

let arr = [1, 13.49, 12, 5, 132.2421, 130, 44.5];
let result;

// Lodash
result = _.filter(arr, val => val > 20);

// Native
result = arr.filter(val => val > 20);

console.log(result);