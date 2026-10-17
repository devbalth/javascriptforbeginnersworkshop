// Selector

const quizContent = document.querySelector('.quiz-content');
const userAction = document.querySelector('#user-action');
const renderScreen = document.querySelector('.render-screen');

// Variables

let currentScore = 0;
let currentQuestionNumber = 1;
let totalQuestions = 5;

let firstCalculateQuestionValue;
let secondCalculateQuestionValue;

let correctAnswer;

let answerOptionList = [];



/* Functions */

// Menu Element in Render Screen

function defaultMenuElementInRenderScreen(){

    /* Reset Question Number to 1 */

    currentQuestionNumber = 1;

    /* Create Menu */

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    div.setAttribute('id', 'result');
    div.append(h2);
    h2.textContent = 'Current Score';
    div.append(p);
    p.textContent = currentScore;

    renderScreen.append(div);

    /* Create Action Button - Start Quiz and Reset Score */

    defaultActionButtonMenu();

}

// Action Button in Menu

function defaultActionButtonMenu(){

    /* Create Buttons - Start Quiz and Reset Score */

    const startQuizButton = document.createElement('button');
    const resetScoreButton = document.createElement('button');

    startQuizButton.classList.add('start-button');
    userAction.append(startQuizButton);
    startQuizButton.textContent = 'Start Quiz'

    resetScoreButton.classList.add('reset-button')
    userAction.append(resetScoreButton);
    resetScoreButton.textContent = 'Reset Score';
  
}

// Create Questions and Choice Element

function questionsChoicesElement(){

    /* Remove Multiple Choices Value when re-render */

    answerOptionList = [];
    
    /* Create Questions and Multiple Choice Element */

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

    /* Inject Questions and Multiple Choices */

    injectQuestionAndListContent(questionParagraph, ol);

    /* Check Answer */

    const removeQuesionDetails = document.querySelector('#question-details');
    const olParentElement = document.querySelector('ol');

    checkAnswer(olParentElement, removeQuesionDetails, backToMenuButton);
    

}

// Inject Question Contents and List

function injectQuestionAndListContent(questionParagraph, ol){

    /* Create random value of a x b */

    firstCalculateQuestionValue = generateRandomNumber();
    secondCalculateQuestionValue = generateRandomNumber();

    /* Calculate the Correct Answer */

    correctAnswer = firstCalculateQuestionValue * secondCalculateQuestionValue;

    /* Create loop to inject content to the multiple choice */

    for(let i = 0; i < 3; i++){

        /* Generate Random answer range from x to correct answer */

        const generateOptions = generateAnswerOptionNumber(correctAnswer);

        /* Do a check if any number is similar inside the array - we want to prevent duplication */
        /* Do a check if random number generate is similar to correct answer */

        answerOptionList.forEach(option => {

            if(answerOptionList.includes(generateOptions) || option === correctAnswer){

                /* If any duplicate or similar to corret answer get the index position */

                const getIndex = answerOptionList.indexOf(option);

                /* Remove and generate another number */

                answerOptionList.splice(getIndex, 1, generateAnswerOptionNumber(correctAnswer))
            };

        })

        answerOptionList.push(generateOptions);
        
    }

    /* Now we inject the correct answer to the multiple choice array depending on the random position given */

    answerOptionList.splice(randomAnswerPosition(), 0, correctAnswer);

    /* Here we create a template string to create the question */

    questionParagraph.textContent = `What is ${firstCalculateQuestionValue} * ${secondCalculateQuestionValue}?`

    /* Inject the Multiple Choice content to the list */

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



// Generate Random Values - Random Number / Random number as Options / Random index position for Answer

function generateRandomNumber(){
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

defaultMenuElementInRenderScreen();