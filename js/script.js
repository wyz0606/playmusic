

var music = ["Youngblood", "Lucid Dreams", "Shallow", "Girls Like You", "Happier", "Better Now"];
var random = 0;
var back = 0;

function randomNum(arrayName){
	return Math.floor(Math.random()*arrayName.length);
}

function playMusic(r){

	var sound = new Howl({
		src:['music/'+music[r]+'.mp3'],
		loop: false,
		pool: 1,
	});


	$('#switch').click(function(){
		sound.stop();
	});

	sound.once('load', function(){
		sound.play();
	});
}

function changeCover(){
	random = randomNum(music);
	console.log("+++++" + random);
	$('#title').text(music[random]);
	playMusic(random);
	$('#cover').css("background", "url('cover/" + music[random] + ".png') no-repeat");
	$('#cover').css("background-size", "500px 500px");
	console.log("url('cover/" + music[random] + ".png') no-repeat");
}

function changeBackground(){
	if(back == 0){
		console.log("black");
		$('#back').css("background-color", "#85adad");
		$('#title').css("color", "white");
		back = 1;
	} else if(back == 1){
		console.log("white");
		$('#back').css("background-color", "white");
		$('#title').css("color", "#0c1a27");
		back = 0;
	}

}

function changeBackgroundImage(){
	$.ajax({
			url: "https://api.unsplash.com/photos/random",
			method: "GET",
			dataType: "json",
			headers: {
   				"Authorization": "Client-ID dff55246a193c9d14d513c0cdde1ac11958055b2533c08df372c298e9dd8720d",
  			},
  			success: function(data){
  				var imgurl = data.urls.full
  				$('#back').attr("src", imgurl);
  			}
	})
}



function init(){
	console.log("init success");
	$("#switch").click(function(){
		changeCover();
		changeBackground();
		changeBackgroundImage();
	});
	$("#back").click(function(){
		changeBackground();
		console.log("back clicked");
	});
	
}

$(document).ready(function(){
	console.log("play music");
	init();
});
