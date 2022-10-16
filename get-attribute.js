let firstItem = document.getElementById('one');//get first list item
if (firstItem.hasAttribute('class')){ //if it has class attribute
    let attr = firstItem.getAttribute('class');//get the attribute

    //add the value of the attribute after the list
    let el = document.getElementById('scriptResults');
    el.innerHTML = '<p> The first item has a class name: ' + attr + '</p>';
}