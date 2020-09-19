var music = document.querySelector(".music-element");
var playBtn = document.querySelector(".play");
var seekbar = document.querySelector(".seekbar");
var currentTime = document.querySelector(".current-time");
var duration = document.querySelector(".duration");

var musicList = [
	{
		songName: "Welcome To The Rubbish Dump",
		artist: "ばらっげ",
		songUrl:
        "../image/Someone's Satellite - I am, I was/01. Welcome To The Rubbish Dump.mp3",
	},
	{
		songName: "Friend with Scraps",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/02. Friend with Scraps.mp3",
	},
	{
		songName: "Battleships",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/03. Battleships.mp3",
	},
	{
		songName: "Move, Move, Move",
		artist: "ばらっげ",
		songUrl:
			"https://data25.chiasenhac.com/download2/2118/6/2117299-da5feef6/128/Diamonds%20-%20Sam%20Smith.mp3",
    },
    {
        songName: "I am, I was",
		artist: "ばらっげ",
		songUrl:
			"https://data25.chiasenhac.com/download2/2118/6/2117299-da5feef6/128/Diamonds%20-%20Sam%20Smith.mp3",
	},
];

function handlePlay() {
	if (music.paused) {
		music.play();
		playBtn.className = "pause";
		playBtn.innerHTML = '<i class="material-icons">pause</i>';
	} else {
		music.pause();
		playBtn.className = "play";
		playBtn.innerHTML = '<i class="material-icons">play_arrow</i>';
	}
	music.addEventListener("ended", function () {
		playBtn.className = "play";
		playBtn.innerHTML = '<i class="material-icons">play_arrow</i>';
		music.currentTime = 0;
	});
}

music.onloadeddata = function () {
	seekbar.max = music.duration;
	var ds = parseInt(music.duration % 60);
	var dm = parseInt((music.duration / 60) % 60);
	duration.innerHTML = dm + ":" + ds;
};
music.ontimeupdate = function () {
	seekbar.value = music.currentTime;
};
handleSeekBar = function () {
	music.currentTime = seekbar.value;
};
music.addEventListener(
	"timeupdate",
	function () {
		var cs = parseInt(music.currentTime % 60);
		var cm = parseInt((music.currentTime / 60) % 60);
		currentTime.innerHTML = cm + ":" + cs;
	},
	false
);

// like
var favIcon = document.querySelector(".favorite");
function handleFavorite() {
	favIcon.classList.toggle("active");
}

// repeat
var repIcon = document.querySelector(".repeat");
function handleRepeat() {
	if (music.loop == true) {
		music.loop = false;
		repIcon.classList.toggle("active");
	} else {
		music.loop = true;
		repIcon.classList.toggle("active");
	}
}

// volume
var volIcon = document.querySelector(".volume");
var volBox = document.querySelector(".volume-box");
var volumeRange = document.querySelector(".volume-range");
var volumeDown = document.querySelector(".volume-down");
var volumeUp = document.querySelector(".volume-up");

function handleVolume() {
	volIcon.classList.toggle("active");
	volBox.classList.toggle("active");
}

volumeDown.addEventListener("click", handleVolumeDown);
volumeUp.addEventListener("click", handleVolumeUp);

function handleVolumeDown() {
	volumeRange.value = Number(volumeRange.value) - 20;
	music.volume = volumeRange.value / 100;
}
function handleVolumeUp() {
	volumeRange.value = Number(volumeRange.value) + 20;
	music.volume = volumeRange.value / 100;
}

//custom JS
let soucePlayer = $("#musicSource");

function changeMusic(songName) {
	if (songName == "Love love love") {
		soucePlayer.attr(
			"src",
			"https://data25.chiasenhac.com/download2/2118/6/2117299-da5feef6/128/Diamonds%20-%20Sam%20Smith.mp3"
		);
	}

	music.load();
}