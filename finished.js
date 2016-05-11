

//target the ul with id 'list'
var list = document.getElementById('list');
//target the button with id 'add-list-item';
var addToListButton = document.querySelector('#add-list-item');

//add a function (trigged on click) to the addToListButton element
addToListButton.onclick = function(event) {
   //create a new list item of type 'li'
   var newListItem = document.createElement('li');
      //give the newly created item a class of 'item'
      newListItem.className = 'item';
      //give the item some text!
      newListItem.innerHTML = 'List item that we added with Javascript!';

   //append the new item to the list
   list.appendChild(newListItem);
}
