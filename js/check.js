//сделать так, чтобы проверять правильность текста без пробелом перед пунктуацией\

(function(){
	var textarea = document.getElementById('textarea');
	var checkbutt = document.getElementsByClassName('check-butt')[0];
	checkbutt.addEventListener('click',checkFunc);
	//textarea.addEventListener('keyup',controlPunctuation)
	function checkFunc(){
		checkbutt.removeEventListener('click',checkFunc);
		var userText = textarea.value;
		var trueText = "regerg. ewffw. wefwefe. wefwef.";
		var count = 0;
		var i = 0;
		//console.log(trueText.length);
		//исключаю пробелы в начале
		while (userText[i] == " "){
			i++;
		}

		userText = userText.slice(i);
		userText = userText.replace(/(\s)+/g,' ');//убрали все лишние
		userText = userText.replace(/\s([,.?!;:-])/g, '$1');//убрали пробел перед запятой
		userText = userText.replace(/([,.?!;:-])/g, '$1 ');//добавил пробел после запятой
		userText = userText.replace(/(-)\s/g,'$1');//убрал пробел после тире
		userText = userText.replace(/(\s)+/g,' ');//убрали все лишние;
		userText = userText.split(" ");

		trueText = trueText.replace(/(\s)+/g,' ');
		trueText = trueText.replace(/\s([,.?!;:-])/g, '$1');//убрали пробел перед запятой
		trueText = trueText.replace(/([,.?!;:-])/g, '$1 ');//добавил пробел после запятой
		trueText = trueText.replace(/(-)\s/g,'$1');//убрал пробел после тире
		trueText = trueText.replace(/(\s)+/g,' ');//убрали все лишние;
		trueText = trueText.split(" ");

		if (trueText.length == userText.length){
			for (var i=0;i<trueText.length;i++){
				if (trueText[i].indexOf(userText[i]) == -1){
					count++;
				}
			}
			document.getElementById('dict-count').innerHTML = count;
			document.getElementById('success').style.visibility = "visible";
			$.ajax({
				type:'POST',
				url: 'ТУТ НАПИШЕШ УРЛ куди отримаеш дани',
				data: 'count='+count,
			});
			setTimeout(function(){window.location.href = "ТУТ НАПИШЕШ АДРЕСУ КУДИ ПЕРЕНАПРАВЛЯТИ ЯКШО ВСЕ ОК";},3000);
			
		}
		else{
			document.getElementById('error-dict').style.visibility = "visible";
			setTimeout(function(){window.location.href = "ТУТ НАПИШЕШ АДРЕСУ НА ПЕРЕНАПРАВЛЯННА НА ГОЛОВНУ СТОРЫНКУ ДИКТАНТУ";},3000);

		}
		console.log(userText);
		console.log(trueText);
		console.log(count);
	}



})();