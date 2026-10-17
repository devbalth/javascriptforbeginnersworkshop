/*

    5 minutes

    #1 Remove the attribute of class="heading" in h1

    #2 Check if the anchor tag of Google Search Engine has an href attribute

    #4 Create a condition for the tag of Google Seach Engine that if there
       is no href attribute, create one

    #5 Change the href value of bing to bing.com

    #6 Get the attribute value of src in script tag, log it


       
*/

// Type your code below:

const h1 = document.querySelector('h1');

h1.removeAttribute('class');

const links = document.querySelectorAll('a');

if(!links[0].hasAttribute('href')){
    links[0].setAttribute('href', 'https://google.com');
}

links[1].setAttribute('href', 'https://bing.com');

console.log(document.querySelector('script').getAttribute('src'));