// REST

const user = {
  name: 'Thiago',
  age: 30,
  company: 'TC Solutions'
}

const { name, ...rest } = user;

console.log(name);
console.log(rest);

const arr = [ 1, 2, 3, 4];

const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function sum(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(sum(1, 3, 4, 5));

// SPREAD

const arr1 = [ 1, 2, 3];
const arr2 = [ 4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const user2 = {
  name: 'Thiago',
  age: 30
};

const user3 = {...user2, name: 'Cifani' };

console.log(user3);