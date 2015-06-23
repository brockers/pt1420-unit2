// alert("Hello world");
function processForm(){
	var name;
	var message;
	name = document.getElementById("name");
	message = document.getElementById("message");
	
	alert("Hello " + name.value + " your message is: " + message.value);
}