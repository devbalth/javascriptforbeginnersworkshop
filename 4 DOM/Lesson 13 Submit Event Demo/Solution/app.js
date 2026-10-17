/*

    5 minutes

    #1 Create an event where when the input field value
       display on the list below when user click the
       add task button

    #2 After User add task, ensure form is blank
       
*/

const ol = document.querySelector('ol');

function deleteElement(event){

    event.stopPropagation();

    const userClick = event.target;

    if(userClick.classList.contains('delete-button')){
        userClick.parentElement.remove();
    }
}

ol.addEventListener('click', deleteElement);


// Type your code below:

const inputField = document.querySelector('input');
const form = document.querySelector('form');

function addTaskToList(event){
    event.preventDefault();

    const li = document.createElement('li');
    const button = document.createElement('button');

    li.textContent = inputField.value;
    button.classList.add('delete-button');
    button.textContent = 'Delete'
    li.append(button);
    ol.append(li);

    inputField.value = '';
}

form.addEventListener('submit', addTaskToList);