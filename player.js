const myVideo = document.getElementById('myVideo');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');

btnPlay.addEventListener('click', vidAction);
btnPause.addEventListener('click', vidAction);
btnStop.addEventListener('click', vidAction);
myVideo.addEventListener('ended', vidAction);


function vidAction(event) {
    switch (event.target.id) {
        case "btnPlay":
            playVideo();
            timer = setInterval(update, 100);
            break;
        case "btnPause":
            myVideo.pause();
            myVideo2.pause();
            break;
        case "btnStop":
            myVideo.pause();
            myVideo2.pause();
            myVideo.currentTime = 0;
            myVideo2.currentTime = 0;
            break;
    }
}

function playVideo() {
    myVideo.play();
    myVideo2.play();
    timer = setInterval(update, 100);
}