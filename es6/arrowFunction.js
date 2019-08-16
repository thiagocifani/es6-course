const arr = [1, 3, 4, 5, 9, 9];

const newArr = arr.map((item, index) => {
  return item + index;
});
console.log(newArr);

const sum = arr.reduce((total, next) => {
  return total + next;
});
console.log(sum);

const filter = arr.filter(item => item % 2 === 0);
console.log(filter);

const find = arr.find(item => item == 4);
console.log(find);

const teste = () => [1, 2, 3, 4];

const obj = () => ({nome: 'thiago'});
