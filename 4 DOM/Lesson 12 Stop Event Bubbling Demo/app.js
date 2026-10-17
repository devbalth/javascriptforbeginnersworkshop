/*

    1 minutes

    #1 Stop the event bubbling
       
*/

// Type your code below:

const div = document.querySelector('div');
const btn = document.querySelector('button');

div.addEventListener('click', event => {
    console.log('Oh no this is being triggered');
});

btn.addEventListener('click', () => {
    console.log('Accidentally press');
});