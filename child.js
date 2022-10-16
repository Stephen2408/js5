let startItem = document.getElementsByTagName('ul')[0];
let firstItem = startItem.firstChild;
let lastItem = startItem.lastChild;

//change the values of the children's class attributes
firstItem.className = 'complete';
lastItem.className = 'cool';