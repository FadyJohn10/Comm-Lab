
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('intro_audio').play();
});

document.getElementById('intro_audio').play();

function dIntro(){
    document.getElementById("readybtn").remove();
    document.getElementById("vid").style.filter = "brightness(1)";
    document.getElementById('vid').play();
    setTimeout(function(){
        $(document).ready(function() {
                $("#vid").fadeOut(1000);
                $("#main").fadeIn(500);
        });
        setTimeout(function(){
            document.getElementById('audio').play();
        }, 1000);
    }, 4000);
}