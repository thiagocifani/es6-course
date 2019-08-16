class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data); 
    console.log(this.data);
  }
}
class TodoList extends List {
  constructor() {
    super();
  }
}

const myList = new TodoList();

document.getElementById('novoTodo').onclick = function() {
  myList.add('Novo Todo');
}

// import sum, { subtraction } from './sum';

import * as functions from './sum';

console.log(functions);
console.log(functions.subtraction(4,2));