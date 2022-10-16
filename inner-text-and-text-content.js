let firstItem = document.getElementById('one'); // find first list item
let showTextContent = firstItem.textContent;//get value of textContent
let showInnerText = firstItem.innerText;//get value of innerText

let msg = '<p>textContent: '+ showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';

let el = document.getElementById('scriptResults');
el.innerHTML = msg;
firstItem.textContent = 'sourdough bread';//update the first list item