var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
    'Fazer cafe',
    'Estudar',
    'treinar'
];

function renderTodos(){
        for (todo of todos){
            var todoElement = document.createElement('li');
            var todotext = document.createTextNode(todo);

            todoElement.appendchild(todotext);
            listElement.appendChild(todoElement);
        }
}

renderTodos();