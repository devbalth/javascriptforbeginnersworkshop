/*

    5 minutes

    #1 Select the heading, h1, store in variable

    #2 Select the second paragraph, store in variable

    #3 Select the third paragraph, store in variable

    #4 Select the anchor link <a>, store in variable

    #5 Use console.dir() with each variable to log in the console

        You should be able to see a drop-down arrow and that means
        those are the properties and method where we can use
        to do something with the HTML element we selected

    #6 Try to find the textContent from the anchor drop-down
       then do anchor.textContent = 'value'

*/

// Type your code below:

const heading = document.querySelector('h1');
const secondParagraph = document.querySelector('.style-paragraph');
const thirdParagraph = document.querySelector('#unique-paragraph');
const anchor = document.querySelector('a');

function log(selector){
    console.dir(selector);
}

log(heading);
log(secondParagraph);
log(thirdParagraph);
log(anchor);

anchor.textContent = 'Yahoo';

log(anchor);