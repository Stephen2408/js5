let hotItems = document.querySelectorAll('li.hot');//store Nodelist in array
if (hotItems.length > 0){ // if it contains items
    for (let i = 0;i < hotItems.length;i++){//loop through each item
        hotItems[1].className = 'cool';//change value of class attribute
    }

}