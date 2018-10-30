



var music = ["Youngblood", "Lucid Dreams", "Shallow", "Girls Like You", "Happier", "Better Now"];
// var music = ["music1", "music2", "music3", "music4", "music5", "music6"];
var random = 0;
var back = 0;
// var audioElement;
// var sound;
// var pause = false;

function randomNum(arrayName){
	return Math.floor(Math.random()*arrayName.length);
}

// function playMusic(r){
// 	console.log("playmusic");
// 	audioElement.setAttribute('src', "music/"+music[r]+".mp3");
// 	audioElement.play();
// }

function playMusic(r){

	var sound = new Howl({
		src:['music/'+music[r]+'.mp3'],
		loop: false,
		pool: 1,
	});


	$('#switch').click(function(){
		sound.stop();
		// pause = false;
	});

	sound.once('load', function(){
		sound.play();
	});

	// sound.on('end', function(){
 //  		console.log('Finished!');
	// });
	
	// $('#control').click(function(){
	// 	if(pause){
	// 		pause = false;
	// 		sound.play();
	// 		$('#control').css("background", "url('cover/pause.png') no-repeat");
	// 	}else{
	// 		sound.pause();
	// 		pause = true;
	// 		$('#control').css("background", "url('cover/play.png') no-repeat");
	// 	}
	// });

}

function changeCover(){
	random = randomNum(music);
	console.log("+++++" + random);
	$('#title').text(music[random]);
	playMusic(random);
	$('#cover').css("background", "url('cover/" + music[random] + ".png') no-repeat");
	$('#cover').css("background-size", "500px 500px");
	console.log("url('cover/" + music[random] + ".png') no-repeat");
	// $('#control').css("display", "block");
	
}

function changeBackground(){
	if(back == 0){
		console.log("black");
		$('#back').css("background-color", "#0c1a27");
		$('#title').css("color", "white");
		back = 1;
	} else if(back == 1){
		console.log("white");
		$('#back').css("background-color", "white");
		$('#title').css("color", "#0c1a27");
		back = 0;
	}
}


function init(){
	console.log("init success");
	// audioElement = document.createElement('audio');
	// audioElement.setAttribute('autoplay', 'autoplay');
	$("#switch").click(function(){
		changeCover();
	});
	$("body").click(function(){
		changeBackground();
		console.log("back clicked");
	});
}

$(document).ready(function(){
	console.log("play music");
	init();
});