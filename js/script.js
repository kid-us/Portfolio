const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const signInBtn = document.querySelectorAll(".btn-danger");
// Audio
const audioContainer = document.getElementById("audio-container");

let playing = true;

signInBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("hidden");
    const previous = btn.previousSibling.previousSibling;
    previous.classList.add("hidden");
    btn.nextSibling.nextSibling.classList.add("animate__fadeIn");
    btn.nextSibling.nextSibling.classList.remove("hidden");

    audioContainer.classList.remove("hidden");
    if (playing) pausePlay();
  });
});

const track = document.getElementById("track");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

let pause = document.getElementById("pausePlay");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");

trackIndex = 0;

tracks = [
  "musics/Blackway.mp3",
  "musics/Jemberu.mp3",
  "musics/Metro.mp3",
  "musics/NF.mp3",
  "musics/Rophnan.mp3",
  "musics/Weeknd.mp3",
];

function pausePlay() {
  if (playing) {
    pause.classList.add("bi-pause-fill");
    pause.classList.remove("bi-play-fill");
    track.volume = 0.2;
    track.play();
    playing = false;
  } else {
    pause.classList.add("bi-play-fill");
    pause.classList.remove("bi-pause-fill");
    track.volume = 0.2;
    track.pause();
    playing = true;
  }
}

pause.addEventListener("click", pausePlay);

track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }
  track.src = tracks[trackIndex];
  playing = true;
  pausePlay();
}

next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }
  track.src = tracks[trackIndex];
  playing = true;
  pausePlay();
}

prev.addEventListener("click", prevTrack);
