const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//event lister + function
todoButton.addEventListener('click', (e)=>{
 e.preventDefault();


//todoDiv
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');


//New todo (li)
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('new-todo');  
todoDiv.appendChild(newTodo);

//new button for completed check
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"  "></i>';
completedButton.classList.add('complete-btn');
todoDiv.appendChild(completedButton);

//new button for trash
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);

//append 
todoList.appendChild(todoDiv);

//removing what i in the input after clicking
todoInput.value='';

});

//trash and completed icon on click 
todoList.addEventListener('click', function(e){
    const delNew = e.target;
    if(delNew.classList[0] === 'trash-btn'){
        const todo = delNew.parentElement;
        todo.remove();  
    }
    if(delNew.classList[0] === 'complete-btn'){
        const todo = delNew.parentElement;
        todo.classList.toggle('complete-btn');
    }
})

















