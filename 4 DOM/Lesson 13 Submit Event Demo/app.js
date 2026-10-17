/*

    5 minutes

    #1 Create an event where when the input field value
       display on the list below when user click the
       add task button
       
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