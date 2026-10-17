/*

    10 minutes

    #1 When the user click on the Add Number button, a list will be created
       with a delete button, so when user click delete button,
       it should be remove from the list.

       Make sure the button class has a delete-button

       e.g.

       <li>
            20
            <button class="delete-button">Delete</button>
        </li>
       
*/

// Type your code below:

const numberListParentElement = document.querySelector('#number-list');
const addNumberButton = document.querySelector('.add-number');

function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function createElementList(){
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.textContent = generateRandomNumber();
    button.classList.add('delete-button');
    button.textContent = 'Delete';
    li.append(button);
    numberListParentElement.append(li);
}

function removeElement(event){
    const selectElement = event.target;
    
    if(selectElement.classList.contains('delete-button')){
        const parentElement = selectElement.parentElement;
        parentElement.remove();
    }

}

addNumberButton.addEventListener('click', createElementList);
numberListParentElement.addEventListener('click', removeElement);