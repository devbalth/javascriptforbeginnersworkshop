/*

    5 minutes

    #1 Use click as the event-name for all the list

    #2 Log the event argument to see the information
       
*/

// Type your code below:

const li = document.querySelectorAll('li');

function log(event){
    console.log(event);
}

for(const list of li){
    list.addEventListener('click', log);
}