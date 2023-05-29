const input = document.querySelector('input');
// const audio = document.querySelector('audio');
const results = document.querySelector('div.results p');
const time = document.querySelector('div.time p')
let started = false;
let playedTime = 0;
let timeout;
let correctAnswer;

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
    input.hidden = false;
    input.focus();
    let min = 10,
        max = 100;
    let a = Math.floor(Math.random() * (max - min + 1) + min),
        b = Math.floor(Math.random() * (max - min + 1) + min),
        rand = a + " + " + b;


    correctAnswer = a + b;
    results.textContent = 'Ожидание';
    time.textContent = '00.000';
    timeout = setTimeout(() => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = rand.toString();
        window.speechSynthesis.speak(msg);
        playedTime = performance.now();

    }, rand * 1000);
}

function end(timeStamp){
    if(!playedTime){
        results.textContent = "Слишком быстро! Повторите попытку.";
        clearTimeout(timeout);
    } else {
        const currentTime = timeStamp - playedTime;
        if (input.value === correctAnswer.toString()){
            results.textContent = "Верно";
        } else {
            results.textContent = "Неверно";
        }
        time.textContent = formatTime(currentTime).toString();
        input.value = "";
        playedTime = 0;

    }
    input.hidden = true;
}

document.querySelector('body').addEventListener("keypress", evt => {
    if(evt.code === "Enter") click(evt);
}, {passive: false});