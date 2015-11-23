var videotag = document.getElementById("bgvideo");
videotag.play();
videotag.addEventListener('ended', function() {
    videotag.currentTime = 0.1;
    videotag.play();
});
