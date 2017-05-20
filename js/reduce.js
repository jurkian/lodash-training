// Reduce

let arr = [12, 5, 8, 130, 44];
let result;

// Lodash
result = _.reduce(arr, (sum, value) => sum + value);

// Native ES6
// result = arr.reduce((sum, value) => sum + value);

result = arr.reduce((sum, value) => {
   console.log(sum);
   console.log(value);

   return sum + value;
});

console.log(result);