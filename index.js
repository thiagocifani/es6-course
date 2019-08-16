var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
 

var todos = JSON.parse(localStorage.getItem('todo_list')) || [];

function renderTodos() {

    listElement.innerHTML =  '';


    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'removeTodo('+ pos +')');

        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todo = inputElement.value;

    todos.push(todo);
    save();

    inputElement.value = '';

    renderTodos();
}

function removeTodo(pos) {
    todos.splice(pos, 1);
    save();

    renderTodos();
}

function save() {
    localStorage.setItem("todo_list", JSON.stringify(todos));
}

buttonElement.onclick = addTodo;