//here is script for open auth window,open reg window
//for close butt,for sandwich, for testind pswd fields

var preloader = document.getElementById('preloader');
preloader.style.display = "none";
var menu = document.getElementById('mainMenu');
var sand = document.getElementById('sand');
var authButton = document.getElementById('authButton');
var regButton = document.getElementById('regButton');
var shadow = document.getElementById('shadow');
var authSection = document.getElementById('authSection');
var regSection = document.getElementById('regSection');
var closeButt = document.getElementById('closeButt');
var closeButt1 = document.getElementById('closeButt1');
var regMe = document.getElementById('regMe');
var repeatpswd = document.getElementById('repeatpswd');

sand.addEventListener('click',function(){
	if (menu.className == "main-menu"){
		menu.className += " responsive";
	}
	else menu.className = "main-menu";
});

authButton.addEventListener('click',function(){
	if (shadow.style.visibility == 'hidden' || shadow.style.visibility == ''){
		shadow.style.visibility = 'visible';
		shadow.style.opacity = '1';

		authSection.style.visibility = 'visible';
		authSection.style.opacity = '1';
	}

});
regButton.addEventListener('click',function(){
	if (shadow.style.visibility == 'hidden' || shadow.style.visibility == ''){
		shadow.style.visibility = 'visible';
		shadow.style.opacity = '1';

		regSection.style.visibility = 'visible';
		regSection.style.opacity = '1';
	}

});

repeatpswd.addEventListener('blur',testPswdField);
repeatpswd.addEventListener('input',testPswdField);

function testPswdField(){
	console.log();
	if (repeatpswd.value != document.getElementById('pswd').value){
		regMe.disabled = true;
		repeatpswd.style.borderColor = "red";
	}
	else{
		regMe.disabled = false;
		repeatpswd.style.borderColor = "#D2D9DC";
	}

}
closeButt.addEventListener('click',closeButtHandler);
closeButt1.addEventListener('click',closeButtHandler);

function closeButtHandler(){
	var id;
	if (authSection.style.visibility == "visible"){
		id = authSection;
	}
	else{
		id = regSection;
	}
	console.log(id);
	id.style.visibility = 'hidden';
	id.style.opacity = '0';
	shadow.style.visibility = 'hidden';
	shadow.style.opacity = '0';

}