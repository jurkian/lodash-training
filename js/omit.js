// Omit

let obj = {
   id: 5,
   first_name: 'Jakub',
   roles: ['administrator'],
   skills: ['JavaScript', 'React', 'Webpack']
};

let result;

console.log(obj);

result = _.omit(obj, ['first_name', 'roles']);

console.log(result);