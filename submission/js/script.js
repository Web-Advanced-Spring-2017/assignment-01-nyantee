

 $( "#plusButt" ).click(function() {
  	

    var Urinput = $(first_name).val();

  if(Urinput!=null) {

  	addItemTodo(Urinput);
  }
 

});


 function removeItem(){

 	console.log(event);

  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  

  parent.removeChild(item);
}


 

function addItemTodo(text){

		var list = document.getElementById('remainingT');

		var first_name = document.createElement('li');
		first_name.innerText= text;

		var goodButtons = document.createElement('div');
		goodButtons.classList.add('goodButtons');
		
		var remove= document.createElement('button');
		remove.classList.add('remove');
		remove.innerHTML='<i class="material-icons">delete</i>';

		//add click event for removing item

		remove.addEventListener('click', removeItem);

		var complete= document.createElement('button');
		complete.classList.add('complete');
		complete.innerHTML='<i class="material-icons">stars</i>';

		goodButtons.appendChild(remove);
		goodButtons.appendChild(complete);
		first_name.appendChild(goodButtons);

		list.appendChild(first_name);
	
	}



