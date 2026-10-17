/*

    5 minutes

    #1 Remove the existing done class attribute value

    #2 For all class that is task-complete to be added a class call done

    #3 For all class that is inProcess to be added a class in-process
       
*/

// Type your code below:

const li = document.querySelectorAll('li');

function backgroundColor(arrayList){

    for(const list of arrayList){
        if(list.classList.contains('done')){
            list.classList.remove('done');
        }
    }

    for(const list of arrayList){
        if(list.classList.contains('task-complete')){
            list.classList.add('done');
        } else {
            list.classList.add('in-process');
        }
    }

}

backgroundColor(li);