//store the element to be removed in a variable
let removeEl = document.getElementsByTagName('li')[3];

//find the element which contains the element to be removed
let containerEl = document.getElementsByTagName('ul')[0];

//remove the element
containerEl.removeChild(removeEl);