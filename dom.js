// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

//add HELLO word before tiem1
// task7
var newDiv=document.createElement('div');
newDiv.className='hello 1';
newDiv.id='hello 1';
newDiv.setAttribute('title','hello div');
var newDivText=document.createTextNode('hello world');
newDiv.appendChild(newDivText);

var li=document.querySelector('li'); //here we access the whole li
console.log(li.parentNode); //here we find the parent node of li
var itemlist=li.parentNode; //it is stored in variable

var item=document.querySelector('li:nth-child(1)');
console.log(item);
itemlist.insertBefore(newDiv,li);