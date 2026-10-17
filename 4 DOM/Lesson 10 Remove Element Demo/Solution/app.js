/*

    5 minutes

    #1 Create an event where when the user click delete, the
       element selected is remove from the web page

       You might need a property value that delete the parent 
       element of the button (view using console.dir(selector))
       
*/

// Type your code below:

const buttons = document.querySelectorAll('button.delete-button');

function deleteElement(event){
    const selectButton = event.target;
    const parentElement = selectButton.parentElement;

    parentElement.remove()
}

buttons.forEach(button => {
    button.addEventListener('click', deleteElement);
})