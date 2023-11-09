// This event listener ensures that the code runs when the document is fully loaded.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('intro_audio').play();
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("playBtn").click();
});

// Function for scrolling the page automatically
function scrollPage() {

    // Scroll the window by 0.5 pixels vertically.
    window.scrollBy(0, 0.5);
    if (window.scrollY < document.body.clientHeight - window.innerHeight) {
        requestAnimationFrame(scrollPage);
    }
}

// Function for initiating the intro sequence
function dIntro(country) {
    // Remove the 'readybtn' element from the page.
    document.getElementById("playBtn").remove();

    // Adjust the brightness of the 'vid' element to 100%
    document.getElementById("vid").style.filter = "brightness(1)";

    // Play the intro video
    document.getElementById('vid').play();

    // Set a timeout to control the timing of subsequent actions.
    setTimeout(function() {
        // Ensure the document is fully ready.
        $(document).ready(function() {
            $("#vid").fadeOut(500);
            $("#main").fadeIn(500);
        });

        // Set a timeout to control the timing of the main audio and scrolling.
        setTimeout(function() {
            document.getElementById('audio').play();
            if(country == 'pakistan'){
                changeImage();
            }
            // Start scrolling the page automatically.
            scrollPage();
        }, 1000);
    }, 4000);
}

// change image after a 30s delay
function changeImage(){
    setTimeout(function(){
        document.querySelector(".pakistan_parllax").style.backgroundImage = "url('./images/pakistan2.png')";
    }, 30000)
}