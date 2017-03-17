const remote = require("electron").remote;
const server = remote.require("./server.js")

let button = document.createElement('button');
button.textContent = "Open Window";
button.addEventListener("click", function(){
	server.openWindow();
});
document.body.appendChild(button);