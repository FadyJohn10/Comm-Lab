function dIntro(){
    document.getElementById("readybtn").remove();
    document.getElementById('vid').play();
    setTimeout(function(){
        
        $(document).ready(function() {
                $("#vid").fadeOut(1000); // 1000 milliseconds (1 second) duration
        });

        document.getElementById("main").style.display = "block";
    }, 4000);
}