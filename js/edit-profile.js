var preloader = document.getElementById('preloader');
preloader.style.display = "none";
var menu = document.getElementById('mainMenu');
var sand = document.getElementById('sand');


sand.addEventListener('click',function(){
	if (menu.className == "main-menu"){
		menu.className += " responsive";
	}
	else menu.className = "main-menu";
});