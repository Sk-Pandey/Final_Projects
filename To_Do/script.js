const todoForm =document.querySelector("form");
const todoInput=document.getElementById("todo-input");
const todoListUl=document.getElementById("todo-list");

let allTodos =getTodos();
updateTodoList();

todoForm.addEventListener("submit",function(e){
    e.preventDefault();
    addTodo();
})
function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText.length>0){
        allTodos.push(todoText);
        updateTodoList();
        saveTodos();
        todoInput.value="";
    }}
function updateTodoList(){
    todoListUl.innerHTML="";
    allTodos.forEach((todo,todoIndex)=>{
        todoItem=createTodoItem(todo,todoIndex);
        todoListUl.append(todoItem);
    })

}


function createTodoItem(todo,todoIndex){
    const todoLi = document.createElement("li");
    let todoId="todo-"+todoIndex;
    todoLi.className="todo";
    todoLi.innerHTML=`
    <input type="checkbox" id="${todoId}"/>
          <label for="${todoId}" class="custom-checkbox"><i class="material-icons">check</i></label>
          <label for="${todoId}" class="todo-text">${todo}</label>
          <button class="delete-button">
            <i class="material-icons">delete</i>
          </button>
    ` 
    const deleteButton = todoLi.querySelector(".delete-button");
    deleteButton.addEventListener("click",()=>{
        deleteTodoItem(todoIndex)
    })
    return todoLi;
}

function deleteTodoItem(todoIndex){
    allTodos = allTodos.filter((_,i)=>i !==todoIndex);
    saveTodos();
    updateTodoList();
}

function saveTodos(){
    const todoJson = JSON.stringify(allTodos);
    localStorage.setItem("todos",todoJson);
}
function getTodos(){
    const todos = localStorage.getItem("todos") ||"[]";
    return JSON.parse(todos);
}