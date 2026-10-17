/*

======================================================================================================================================================
Follow the number accordingly to fix the broken application
======================================================================================================================================================

*/

/*

======================================================================================================================================================

1. Create a variable call quizContent and point it to the quiz-content element
2. Create a variable call userAction and point it to the user-action element
3. Create a variable call renderScreen and point it to the render-screen element

======================================================================================================================================================

*/

// Selector

const quizContent = document.querySelector('.quiz-content');
const userAction = document.querySelector('#user-action');
const renderScreen = document.querySelector('.render-screen');

// Variables

/*

======================================================================================================================================================

We need to create the variables to track current score, current question number, the maximum total questions,
a x b value, correct answer and an array to store the multiple choice values

4. Create a variable call currentScore with number value of 0
5. Create a variable call currentQuestionNumber with number value of 1
6. Create a variable call totalQuestions with number value of 5
7. Create a variable call firstCalculateQuestionValue with undefined value
8. Create a variable call secondCalculateQuestionValue with undefined value
9. Create a variable call correctAnswer with undefined value
10. Create an array call answerOptionList with an empty array

======================================================================================================================================================

*/

let currentScore = 0;
let currentQuestionNumber = 1;
let totalQuestions = 5;

let firstCalculateQuestionValue;
let secondCalculateQuestionValue;

let correctAnswer;

let answerOptionList = [];



// Function

function defaultMenuElementInRenderScreen(){

/*

======================================================================================================================================================

We want to make sure, whenever the user get back to the menu screen
the current question number is reset to 1 or else the quiz might finish early

11. Overwrite the currentQuestion to number value of 1

======================================================================================================================================================

*/

    currentQuestionNumber = 1;

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    div.setAttribute('id', 'result');
    div.append(h2);
    h2.textContent = 'Current Score';
    div.append(p);
    p.textContent = currentScore;

    renderScreen.append(div);

/*

======================================================================================================================================================

Once the content is rendered, we want the Start Quiz and Reset Score button
to render as well.

12. Call the function of defaultActionButtonMenu

======================================================================================================================================================

*/

    defaultActionButtonMenu();

}

function defaultActionButtonMenu(){

    const startQuizButton = document.createElement('button');
    const resetScoreButton = document.createElement('button');

    startQuizButton.classList.add('start-button');
    userAction.append(startQuizButton);
    startQuizButton.textContent = 'Start Quiz'

    resetScoreButton.classList.add('reset-button')
    userAction.append(resetScoreButton);
    resetScoreButton.textContent = 'Reset Score';
  
}



function questionsChoicesElement(){

/*

======================================================================================================================================================

Before we create the questions and multiple choice, we want to make sure
that the array that is storing the multiple choice value and answer is
no longer available or else our array will contain more than 4 which
we do not want as we only have 4 option to choose from.

13. Overwrite the answerOptionList array to be empty

======================================================================================================================================================

*/

    answerOptionList = [];

    const div = document.createElement('div');
    const questionParagraph = document.createElement('p');
    const ol = document.createElement('ol');
    const backToMenuButton = document.createElement('button');

    div.setAttribute('id', 'question-details');
    questionParagraph.setAttribute('id', 'question');
    ol.setAttribute('id', 'choices');
    div.append(questionParagraph, ol);
    div.append(ol);
    backToMenuButton.textContent = 'Back to Menu Screen';
    backToMenuButton.classList.add('back-menu');
    renderScreen.append(div);
    userAction.append(backToMenuButton);

/*

======================================================================================================================================================

The function of injectQuestionAndListContent requires an important arguments in
order to create the questions and multiple choices so we need to pass down
the correct argument to the function

14. Call the injectQuestionAndListContent function with argument of
    questionParagraph and ol

======================================================================================================================================================

*/

    injectQuestionAndListContent(questionParagraph, ol);

/*

======================================================================================================================================================

The function for checkAnswer requires the right HTML element to be pass down as
the argument in order for it to work properly.

15. Create a variable call removeQuestionDetails that points to the question-details elements
16. Create a variable call olParentElement that points to the ordered list element
17. Call the function of checkAnswer and pass the argument of the removeQuesionDetails, olParentElement
    and backToMenuButton

======================================================================================================================================================

*/


    const removeQuesionDetails = document.querySelector('#question-details');
    const olParentElement = document.querySelector('ol');

    checkAnswer(olParentElement, removeQuesionDetails, backToMenuButton);
    
}

// Inject Question Contents and List

function injectQuestionAndListContent(questionParagraph, ol){

/*

======================================================================================================================================================

In this section, we need a value for a x b and also the value of the correct answer

18. Overwrite the value of firstCalculateQuestionValue to the function of generateRandomNumber
19. Overwrite the value of secondCalculateQuestionValue to the function of generateRandomNumber
20. Overwrite the correctAnswer that gives the total from the two values of
    firstCalculateQuestionValue and secondCalculateQuestionValue

======================================================================================================================================================

*/    

    firstCalculateQuestionValue = generateRandomNumber();
    secondCalculateQuestionValue = generateRandomNumber();

    correctAnswer = firstCalculateQuestionValue * secondCalculateQuestionValue;

/*

======================================================================================================================================================

We need to create 3 random wrong answers and push it into the answerOptionList array
where we store 4 values (3 wrong answer and 1 correct). Also we have to make sure
that the random number generate has no duplication or similar to the correct answer.

21. Use for loop with condition of less than 3
22. Create a variable of generateOptions (wrong number value) with value
    of the generateAnswerOptionNumber and make sure to pass the correctAnswer
    as the argument
23. Use forEach with option as in variable to loop the answerOptionList array
24. Create an if condition to check if any of the answerOptionList array-item
    is included in the array or if the array item is equal to the correct answer
25. If true, create a variable call getIndex with value of the index position
    of the duplicate value
26. Once we have the index position of duplicate, we need to remove it from the array
    so we use a specific method that takes in the argument
    of position, how-many-to-delete and generate-random-number-again

======================================================================================================================================================

*/   

    for(let i = 0; i < 3; i++){

        const generateOptions = generateAnswerOptionNumber(correctAnswer);

        answerOptionList.forEach(option => {

            if(answerOptionList.includes(generateOptions) || option === correctAnswer){
                const getIndex = answerOptionList.indexOf(option);
                answerOptionList.splice(getIndex, 1, generateAnswerOptionNumber(correctAnswer))
            };

        })

/*

======================================================================================================================================================

If there is no duplicate value then we push the random number to the
answerOptionList

27. Push the generateOptions to the answerOptionList array
    while maintaining inside the for loop

======================================================================================================================================================

*/   

        answerOptionList.push(generateOptions);
        
    }

/*

======================================================================================================================================================

Now we need to insert the correct answer value into the answerOptionList array

27. Use the splice method with argument of randomAnswerPosition(), keep existing and correct answer
    value

======================================================================================================================================================

*/   

    answerOptionList.splice(randomAnswerPosition(), 0, correctAnswer);

/*

======================================================================================================================================================

We need to create the questions

28. Overwrite the questionParagraph content to this

    What is a * b?

======================================================================================================================================================

*/ 

    questionParagraph.textContent = `What is ${firstCalculateQuestionValue} * ${secondCalculateQuestionValue}?`


/*

======================================================================================================================================================

The for loop below is injecting the wrong content, what we want is to inject 
the array items from the answerOptionList array

28. Overwrite the questionParagraph content to this

    What is a * b?

======================================================================================================================================================

*/ 

    for(let i = 0; i < 4; i++){
        const li = document.createElement('li');
        li.classList.add('multiple-choice');
        li.textContent = answerOptionList[i];
        ol.append(li);
    }

}



// Check Answer 

function checkAnswer(olElement, removeQuestionElement, backToMenuButton){
    olElement.addEventListener('click', event => {

        event.stopPropagation();

        const userClick = event.target.tagName;
        const userAnswer = Number(event.target.textContent);

        if(userClick === 'LI'){

            if(userAnswer === correctAnswer){
                currentScore += 20
            }

            if(currentQuestionNumber >= totalQuestions){
                removeQuestionElement.remove()
                backToMenuButton.remove()
                defaultMenuElementInRenderScreen();
                return;
            }

            currentQuestionNumber += 1;

            removeQuestionElement.remove()
            backToMenuButton.remove()
            questionsChoicesElement();

        }

    })

}

function generateRandomNumber(){

/*

======================================================================================================================================================

The function needs to return a random number from 10 - 30

29. Use Math method to generate from 10 - 30 and make sure to return the
    value

======================================================================================================================================================

*/ 

    return Math.floor(Math.random() * 30) + 10;
}

function generateAnswerOptionNumber(correctAnswer){
    return Math.floor(Math.random() * correctAnswer) + 1;
}

function randomAnswerPosition(){
    return Math.floor(Math.random() * 4);
}




/* Event Listener */


// User Action

userAction.addEventListener('click', (event) => {
    
    event.stopPropagation();
    
    const userSelect = event.target;

    if(userSelect.classList.contains('back-menu')){

        const removeQuesionDetails = document.querySelector('#question-details');

        removeQuesionDetails.remove()
        userSelect.remove()
        currentScore = 0;
        defaultMenuElementInRenderScreen();

    } else if(userSelect.classList.contains('start-button')){

        currentScore = 0;
        currentQuestionNumber = 1;

        const startButton = document.querySelector('.start-button');
        const resetButton = document.querySelector('.reset-button');
        const result = document.querySelector('#result');

        result.remove();
        startButton.remove();
        resetButton.remove()
    
        questionsChoicesElement();

    } else if(userSelect.classList.contains('reset-button')){

        const currentScoreAmount = document.querySelector('#result p');

        currentScoreAmount.textContent = 0;

    }

})





// Start Quiz

/*

======================================================================================================================================================

When the page load for the first time we need to show the
default menu screen

30. Call the function of defaultMenuElementInRenderScreen()

======================================================================================================================================================

*/ 

defaultMenuElementInRenderScreen();