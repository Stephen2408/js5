//create a new element and store it in a variable
let newEl = document.createElement('li');

//create a text node and store it in a variable
let newText = document.createTextNode('quinoa');

//attach the new text node to the new element
newEl.appendChild(newText);

//find the position where the new element should be added
let position = document.getElementsByTagName('ul')[0];

//insert the new element into its position
position.appendChild(newEl);