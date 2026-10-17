/*

    5 minutes

    #1 Select the list <li> with the class value of task-complete and put it inside the variable call
       taskComplete
    
    #2 Select the list <li> with the class value of in-process and put it inside the variable call
       inProcess

    #3 Use console.dir() to log each selector

    #4 Create variable of completeSlotsAvailable and inProcessSlotsAvailable, with value
       of how many list <li> in total for both task-complete and in-process 

       Hint: It output as Node List, and can be counted using one property.

    #5 Create a function of insertToAvailableSlots with parameter of selector, availableSlot and
       whichArray, then execute it to fill in the available list <li> using the arrays 
       value from taskCompleteList and inProcessList accordingly based on the class value

       e.g

       <li class='task-complete'>Clean toilet</li>
       
*/

// Type your code below:

const taskCompleteList = [
    'Clean toilet',
    'Throw rubbish',
    'Clean litterbox',
    'Do research',
    'Do report'
];

const inProcessList = [
    'Prepare work presentation',
    'Laundry',
    'Cook Dinner',
    'Take Oyen to the vet'
];