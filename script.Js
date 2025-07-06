
const songs = [
  "ashky lmeen.mp3.mp3",
  "enek helwin.mp3.mp3",
  "shababek.mp3.mp3"
];


const covers = [
  "cover1.jpg.jpeg",
  "cover2.jpg.jpeg",
  "cover3.jpg.jpeg"
];


let currentSong = 0;


const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playBtn = document.getElementById("playBtn");
const playIcon = playBtn.querySelector("i");


function loadSong(index) {
  audio.src = "music/" + songs[index];
  title.textContent = songs[index];
  cover.src = "images/" + covers[index];
  audio.load();
  updatePlayIcon();
}
loadSong(currentSong);


function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


audio.addEventListener("play", updatePlayIcon);
audio.addEventListener("pause", updatePlayIcon);

function updatePlayIcon() {
  if (audio.paused) {
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  } else {
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  }
}


function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
}


function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
}


audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration) && audio.duration > 0) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});


progress.addEventListener("input", () => {
  if (!isNaN(audio.duration) && audio.duration > 0) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});


volume.addEventListener("input", () => {
  audio.volume = volume.value;
});
