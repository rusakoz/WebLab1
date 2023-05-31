const input = document.querySelector('input');
// const audio = document.querySelector('audio');
const results = document.querySelector('div.results p');
const time = document.querySelector('div.time p');
const randomNums = document.querySelector('p.randomNums');
let started = false;
let playedTime = 0;
let timeout;
let correctAnswer;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


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
        randomNums.textContent = rand;
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

document.querySelector('body').addEventListener("click", evt => {

    while (counts !== 3){
        sleep(1000);
        click();
        counts++;
        console.log(counts);

    }
    if (counts === 3){
        console.log(resul);
        time.textContent = resul;
        let formData = new FormData();
        formData.append('results', resul);
        formData.append('table', 'resultSound');
        fetch('logic/DB/databaseJS.php', {
            body: formData,
            method: "POST"
        }).then(x => {
            if(x.statusText === "OK"){
                console.log('Data sent');
            } else {
                console.warn(x.statusText + " " + x.status);
            }
        })

    }

}, {passive: false});