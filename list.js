

/**
* This Javascript file will walk you through selecting elements in the DOM,
* manipulating those elements, and creating new elements. This is (what I believe)
* to be a useful example of basic DOM manipulation
* You can see the completed version if you go to the html and switch the scripts
* at the bottom of the file from list.js to finished.js
*/

// Anywhere you see this - /* UNCOMMENT LINES BELOW */ - uncomment the lines below it,
// save the file and reload your browser. If you open the console in your developer
// tools you will be able to click on a carrot to expand that element.

// NOTE: **For some reason, sometimes you have to reload the page several times to
// get the expandable carrot to appear**
// The carrot that you want to see will look like this: > ul#list
// The other carrot, <ul id="list">, will not show you the properties
// I'm not sure what this looks like in Firefox, so try to use Chrome for this example


   // This will target the ul element with the id 'list'
   var list = document.getElementById('list');
   // The variable 'list' is now a reference to the DOM Element '#list'



   // If we look at this in the Chrome console log, we're able
   // to expand that element and see all of the properties associated
   // with this element. These properties include strings, other objects,
   // as well as functions.

      /* UNCOMMENT LINE BELOW */
      // console.log('List: ', list);


   // Since 'list' is just an object,
   // we can technically assign any new key:value pair we want!
      /* UNCOMMENT 2 LINES BELOW */
      // list.blahblah = 'hooplah';
      // list['thingamabob'] = 'dohickey';
   // You can comment out the 2 lines above if you would like, since we won't use them



   // There is a div element with the class "button" and id of "add-list-item"
   // In order to perform actions with this button, we need to target it using
   // either getElementById('add-list-item') or querySelector("#add-list-item")
   var addToListButton = document.querySelector('#add-list-item');


   // Similarly to what we did with list, we can console.log our button object
   /* UNCOMMENT LINES BELOW */
   // console.log("Button: ", addToListButton);


   // Again, you may need to reload the browser several times to see the correct
   // carrot. The one you want will look like this: > div#add-list-item.button
      // If you scroll down, you will see all of this button object's keys.
      // These keys include things that pretty much ALL DOM element objects will have
      // One of these is actually a function called 'onclick'


   // Look for the property 'onclick' in the button dropdown, you will notice
   // that the value of it is currently set to 'null'. We are going to attach
   // our own function to this function call so that we can add an element
   // to the list


   // Just like with other objects, we can call an object's property using either
   // bracket or dot notation, so to access 'onclick', we can use addToListButton.onclick
      /* UNCOMMENT 8 LINES BELOW */
      // addToListButton.onclick = function(event) {
      //    // look at the console!
      //    console.log('EVENT: ', event);
      //    console.log('EVENT TARGET: ', event.target);
      //    // event.target is the button that we are clicking, or the target
      //    // element that the event is occuring on. Don't worry too much about
      //    // now, but it is a very useful property of an event
      // }

/*****
* RECOMMENT THOSE 8 LINES ABOVE BEFORE MOVING ON, we'll rewrite it below
*****/


   //What we did here is assign the property 'onclick' to a function.
   //A great built in feature of Javascript, is that certain element functions have
   //a built in parameter that is passed into the event handler.
   //** In this case, our event handler is 'onclick' and the built in parameter
   //is 'event'. We don't have to call this function, nor do we have to pass
   //in any arguments to this event, it simply happens when we click that element


/* UNCOMMENT LINE 99 AND LINE 123
   This will open and close our 'onclick' function
*/

   //addToListButton.onclick = function(event) {
      //we still have our 'ul list' element defined as a variable above,
      //so let's target that and add a list item to it!

      //this will create a new element of type 'li'
      /* UNCOMMENT 1 LINE BELOW */
      // var newListItem = document.createElement('li');

      //Now we have a new DOM element (which is just an object).
      //We can give this some properties, like the class 'item', and we'll give
      //it some text inside
         /* UNCOMMENT 3 LINES BELOW */
         // console.log('NEW LIST ITEM: ', newListItem);
         // newListItem.className = 'item';
         // newListItem.innerHTML = 'List item that we added with Javascript!';


      //Now we have created the element, however we don't attach it to anywhere,
      //it's still floating around in cyberspace memory somewhere.
      //So let's add it to the end of our 'ul list' element
      //We can do this using a function called appendChild(),
         /* UNCOMMENT LINE BELOW */
         // list.appendChild(newListItem);

   //} //end of addToListButton.onclick



//This is a simple use case for DOM manipulation, however it is an extremely powerful
//tool that allows you to manipulate your webpage in an unimaginable amount of ways.


//Look at the finished.js file to see the full version of everything without comments
