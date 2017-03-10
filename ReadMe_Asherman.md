Nyantee Asherman <br>
Advanced Javascript <br>
3/8/2017



<br>

I created this To-do list by attempting to combine Materialize libraries with other snippets of code. I had difficulty incorporating Materialize in some aspects. I was not able to add the edit function to my project, but I will coninue working on that. 

I used this tutorial to help me navigate the to-do list:
https://www.youtube.com/watch?v=2wCpkOk2uCg

---------------------------------------------------------

**JAVASCRIPT**

The main components of To-Do List included

Creating functions for major tasks: removing and adding 

I added this function which used event log to obtain information about where the text and buttons were located in the DOM structure in order to delete the child nodes. 

	function removeItem(){

 	console.log(event);

  	var item = this.parentNode.parentNode;
  	var parent = item.parentNode;
  
  	parent.removeChild(item);
	}


The add function was much longer so I have only included a snippet below. The main feature of the add function was  to take each object or component I needed to make a new task in my To-Do list -- the <li>, buttons, and input text-- and add it to my estbalished <ul> html element. 

	goodButtons.appendChild(remove);
		goodButtons.appendChild(complete);
		//one first-name is the ID of the li and the 			other 
		//first-name represents the variable storing 		input 
		first_name.appendChild(goodButtons);
		list.appendChild(first_name);
		
I added these functions in the listeners for buttons using this code: 

	remove.addEventListener('click', removeItem);

**HTML/CSS/MATERIALIZE **

I incorporated a form element and button from the Materialize libraries as well as used some of their icons 

Most importantly, to incorporate Materialize, I realized that I needed to wrap Materialize elements in a div with an ID that I created on my own: 

	<button class="remove">
				 	<i class="material-icons">delete</i>
				 	</button>
				 	
--------------------
				 	
	<div id="plusButt">
          <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
         </div>




