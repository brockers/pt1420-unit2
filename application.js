// alert("Hello world");
function processForm(){
	var name;
	var message;
	var content;
	
	name = document.getElementById("name");
	message = document.getElementById("message");
	content = document.getElementById("output");
	
	// alert("Hello " + name.value + " your message is: " + message.value);
	
	//content.innerText = "Hello " + name.value + " your message is: " + message.value;
	content.innerHTML = "<div>Hello my name is " + name.value;
	content.innerHTML +=  " and you message is" + message.value;
	content.innerHTML +=  " and more stuff";
	content.innerHTML +=  " yes.. even more</div>";
	content.innerHTML +=  "<div>and finnally even more stuff!!</div>";
	
	
}