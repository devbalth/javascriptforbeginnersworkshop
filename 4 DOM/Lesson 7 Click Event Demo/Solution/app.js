/*

    5 minutes

    #1 Create an event when the user click the Task Complete button
       to turn all the list to green color
       
    #2 Create an event when the user click the Reset button to
       reset the style to default
       
*/

// Type your code below:

const li = document.querySelectorAll('li');
const taskCompleteButton = document.querySelector('#task-complete-button');
const resetButton = document.querySelector('#reset-button');

function complete(){
   for(const list of li){
      list.classList.add('done');
   }
}

function reset(){
   for(const list of li){
      list.classList.remove('done');
   }
}

taskCompleteButton.addEventListener('click', complete);
resetButton.addEventListener('click', reset);