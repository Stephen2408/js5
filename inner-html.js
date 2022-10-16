//store the first list item in a variable
let firstItem = document.getElementById('one');

//get the content of the first list item
let itemContent = firstItem.innerHTML;

//update the content of the first list item so it is a link

firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';