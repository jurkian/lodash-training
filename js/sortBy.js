// SortBy

let users = [
   { id: 1, first_name: 'Jakub', age: 32 },
   { id: 4, first_name: 'Mark', age: 24 },
   { id: 6, first_name: 'Monica', age: 61 },
   { id: 23, first_name: 'Adam', age: 17 }
];

console.log(users);

console.log(_.sortBy(users, ['first_name']));