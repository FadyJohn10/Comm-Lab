let video = document.querySelector(".video");
video.height = video.clientWidth * 0.56;
let vidDuration;
video.addEventListener('loadedmetadata', function() {
  vidDuration = video.duration;
  
});

function checkTime(){
  if (video.currentTime >= vidDuration) {
    // display buttons the specific second is reached
    document.getElementById("buttons").classList.remove("d-none");
  }
}
video.addEventListener('timeupdate', checkTime);