const songs = [
  { title: "Song One", src: "songs/song3.mp3" },
  { title: "Song Two", src: "songs/song2.mp3" }
]

let currentSong = 0
const audio = document.getElementById("audio")
const title = document.getElementById("title")
const progress = document.getElementById("progress")

loadSong(currentSong)

function loadSong(index) {
  title.innerText = songs[index].title
  audio.src = songs[index].src
}

function playPause() {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length
  loadSong(currentSong)
  audio.play()
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length
  loadSong(currentSong)
  audio.play()
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100
})

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration
})
