/*

    5 minutes

    #1 Create an event when the user type in the input
       the value of the h1 changes, for this part
       you may need to use target to get the value
       (target will be taught in the next lesson)

    #2 Return to h1 default when input field is empty
       
*/

// Type your code below:

const h1 = document.querySelector('h1');
const input = document.querySelector('input');

function updateContent(event){
    let inputValue = event.target.value;
    h1.textContent = inputValue;

    if(!h1.textContent){
        h1.textContent = 'This Content will Change';
    }
}

input.addEventListener('input', updateContent);