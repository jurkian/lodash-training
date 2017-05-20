// Find

let arr = [1, 13.49, 12, 5, 132.2421, 130, 44.5];
let result;

// Lodash
result = _.find(arr, el => el === 130);

// Native
result = arr.find(el => el === 130);

console.log(result);