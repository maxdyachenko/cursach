//сделать так, чтобы проверять правильность текста без пробелом перед пунктуацией\

(function(){
	var textarea = document.getElementById('textarea');
	var checkbutt = document.getElementsByClassName('check-butt')[0];
	checkbutt.addEventListener('click',checkFunc);
	//textarea.addEventListener('keyup',controlPunctuation)
	function checkFunc(){
		var userText = textarea.value;
		var trueText = "Мама мила раму, я мил педали. дальще я ролем ипсум, заролил типсум.";
		var count = 0;
		//console.log(trueText.length);
		for (var i = 0,j=0;i < userText.length,j < trueText.length;i++,j++){
			if (userText[i] === "," || userText[i] === "."){
				if (isSpaceBeforeDot(i)){
					console.log("isSpaceBeforeDot(i)");
					j--;
					count++;
					if (!isSpaceAfterDot(i)){
						j++;
						//count++;
					}
					continue;
				}
				if (!isSpaceAfterDot(i)){
					console.log("!isSpaceAfterDot(i)");
					j++;
					count++;
					continue;
				}
			}
			if (userText[i] == " " && userText[i-1] == " "){
				count++;
				j--;
				continue;
			}
			if (trueText[j] !== userText[i]){
				count++;
			}
		}
		count--;//убрал ошибку с последним пробелом
		console.log(count);

		function isSpaceAfterDot(i){
			if (userText[i + 1] !== " "){
				return false;
			}
			return true;
		}
		function isSpaceBeforeDot(i){
			if (userText[i - 1] !== " "){
				return false;
			}
			return true;
		}

	}
	/*var detectComma = false,commaPlace;
	function controlPunctuation(){
		console.log(" " === " ");
		//191 comma
		//8 backspace
		//32 space
		//event.preventDefault();
		//console.log(event.keyCode);
		//console.log(textarea.value.length);
		if (event.keyCode == 191){
			detectComma = true;
			commaPlace = textarea.value.length;
		}
		console.log("commaPlace= " + commaPlace);
		console.log("textarea value lenth= " + textarea.value.length);
		if (textarea.value.length == commaPlace + 1){
			dotPlace(textarea.value[textarea.value.length-1],textarea.value.length);
		}
		function dotPlace(value,place){
			console.log(value);
			if (value != " "){
				textarea.style.color = "red";
				return;
			}
			textarea.style.color = "black";
		}
	}*/



})();