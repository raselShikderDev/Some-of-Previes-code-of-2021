//Open Navbar 

var elementSelect = document.querySelector(".nav-list");

document.querySelector(".open").addEventListener("click", function(){
	elementSelect.classList.add("nav-active")
});

//Remove Navbar

var elementSelect = document.querySelector(".nav-list");

document.querySelector(".close").addEventListener("click", function(){
	elementSelect.classList.remove("nav-active")
});