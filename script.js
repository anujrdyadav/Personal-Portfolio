
const projectsLists = document.querySelector(".projects-lists")
const prevBtn = document.getElementById("prev")
const nextBtn = document.querySelector("#next")

prevBtn.addEventListener('click', function () {
    projectsLists.scrollBy({
        left: -500,
        behavior: 'smooth'
    })
})
nextBtn.addEventListener('click', function () {
    projectsLists.scrollBy({
        left: 500,
        behavior: 'smooth'
    })

}) 

// the video element, button, and icon

const video = document.getElementById('video');
const playPauseButton = document.getElementById('playPauseButton');
const playPauseIcon = document.getElementById('playPauseIcon');

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play(); 
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
  } else {
    video.pause(); 
    playPauseIcon.classList.remove('fa-pause'); 
    playPauseIcon.classList.add('fa-play');    
  }
}

playPauseButton.addEventListener('click', togglePlayPause);

video.addEventListener('play', function() {
  playPauseButton.style.display = 'none';
});

video.addEventListener('pause', function() {
  playPauseButton.style.display = 'block'; 
});
video.addEventListener('ended', function() {
  playPauseButton.style.display = 'block'; 
});

