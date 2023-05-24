
const time = document.querySelector('div.results p');
const audio = document.querySelector('audio');
const source = document.querySelector('source');
let started = false;
let playedTime = 0;
let timeout;

function formatTime(time) {
    time = Math.round(time);
    let outputTime = time / 1000;
    if (time < 10000) {
        outputTime = '0' + outputTime;
    }
    while (outputTime.length < 6) {
        outputTime += '0';
    }
    return outputTime;
}

function getRandomSound() {
    let songs =
        [
            { filename: "logic/Include/sounds/1.mp3"},
            { filename: "logic/Include/sounds/2.mp3"},
            { filename: "logic/Include/sounds/3.mp3"}
        ];

    let randomIndex = Math.floor(Math.random() * songs.length);
    let song = songs[randomIndex];
    audio.src = song.filename;
    audio.volume = 1;
    audio.play();
}

function click(event){
    let timeStamp = performance.now();
    if (started){
        end(timeStamp);
        started = false;
    } else {
        start();
        started = true;
    }
}

function start(){
    let min = 1,
        max = 4;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    time.textContent = '00.000';

    timeout = setTimeout(() => {
        getRandomSound();
        playedTime = performance.now();
    }, rand * 1000);
}

function end(timeStamp){
    if(!playedTime){
        time.textContent = "Слишком быстро!";
        clearTimeout(timeout);
    } else {
        const currentTime = timeStamp - playedTime;
        playedTime = 0;
        time.textContent = formatTime(currentTime).toString();
        // source.src="";
        audio.src="";
        audio.pause();
    }
}

document.querySelector('div.main').addEventListener("click", evt => {
    click(evt);
}, {passive: false});