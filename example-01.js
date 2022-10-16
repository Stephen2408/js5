//adding mục to start and end of list
let list = document.getElementsByTagName('ul')[0];
//get the <ul> element

//add new mục to end of list
let newItemLast = document.createElement('li');
//create element with 'li' name
//create text node with 'cream' word
let newTextLast = document.createTextNode('cream');
//add text node to element
newItemLast.appendChild(newTextLast);
//add element end of list
list.appendChild(newItemLast);

//add new item start of list
let newItemFirst = document.createElement('li');
let newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst,list.firstChild);

// choose all <li> element
let listItem = document.querySelectorAll('li');
//add a class of cool to all list items
let i;
for (i=0;i<listItem.length;i++){
    listItem[i].className = 'cool'; //change class to cool
}
//add number of items in the list to the heading
//h2 element
let heading = document.querySelectorAll('h2');
//h2 text
let headingText = heading.firstChild.nodeValue;
let totalItems = listItem.length;
let newHeading = headingText +
