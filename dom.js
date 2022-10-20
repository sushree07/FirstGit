var headerTitle = document.getElementById('header-title');
var header =document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var items = document.getElementsByClassName('list-group-item');
//console.log(title[0]);
//items.style.fontWeight='bold';this will give error 
items[2].style.backgroundColor='green';  
for(var i=0; i < items.length;i++){
    items[i].style.fontWeight='bold';
}
