var videotag = document.getElementById("bgvideo");
videotag.style.display = "none";

videotag.addEventListener('canplaythrough', function() {
    videotag.style.display = "block";
    videotag.play();
});

videotag.addEventListener('ended', function() {
    videotag.currentTime = 0.1;
    videotag.play();
});
