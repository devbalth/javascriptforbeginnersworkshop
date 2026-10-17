/*

    5 minutes

    #1 When the user click on the list if the task is complete,
       the background colour should change to green and if the user
       clicks again it should be back to red meaning not complete
       
*/

// Type your code below:

const li = document.querySelectorAll('li');

function toggleCompleteOrInProcess(event){
    event.target.classList.toggle('in-process');
    event.target.classList.toggle('done');
}

for(const listItems of li){
    listItems.addEventListener('click', toggleCompleteOrInProcess);
}