(function(){
	var start = document.getElementById('start-butt'),
	curtimetext = document.getElementById('curtimetext'),
	durtimetext = document.getElementById('durtimetext'),
	volumeslider = document.getElementById('volumeslider'),
	textarea = document.getElementById('textarea');


	function initAudio(){
		audio = new Audio();
		audio.src = "./1.mp3";

		start.addEventListener('click',playPause);
		volumeslider.addEventListener("mousemove", setvolume);
		audio.addEventListener("timeupdate",seektimeupdate);
		function playPause(){
			if (audio.paused){
				textarea.disabled = false;
				start.innerHTML = "Пауза";
				audio.play();
			}
			else{
				textarea.disabled = true;
				start.innerHTML = "Старт";
				audio.pause();
			}
		}
		function setvolume(){
			audio.volume = volumeslider.value / 100;
		}
		function seektimeupdate(){
			var nt = audio.currentTime * (100 / audio.duration);
			
			var curmins = Math.floor(audio.currentTime / 60);
			var cursecs = Math.floor(audio.currentTime - curmins * 60);
			var durmins = Math.floor(audio.duration / 60);
			var dursecs = Math.floor(audio.duration - durmins * 60);
			if(cursecs < 10){ cursecs = "0"+cursecs; }
			if(dursecs < 10){ dursecs = "0"+dursecs; }
			if(curmins < 10){ curmins = "0"+curmins; }
			if(durmins < 10){ durmins = "0"+durmins; }
			curtimetext.innerHTML = curmins+":"+cursecs;
			durtimetext.innerHTML = durmins+":"+dursecs;
		}
	}

	window.addEventListener('load',initAudio);

})();