const inputEven = document.querySelector('#even');
const inputOdd = document.querySelector('#odd');
 // const audio = document.querySelector('audio');
const results = document.querySelector('div.results p');
const time = document.querySelector('div.time p')
let started = false;
let playedTime = 0;
let timeout;
let correctAnswer;
let timesPassed = 0;
let timesNeeded = 3;

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
        console.warn('END')
    } else {
        start();
        started = true;
        console.warn('START')
    }
}

function start(){
    playedTime = performance.now();
    console.log(" AAAAA " + playedTime)
    inputEven.hidden = false;
    inputOdd.hidden = false;

    let min = 10,
        max = 100;
    let a = Math.floor(Math.random() * (max - min + 1) + min),
        b = Math.floor(Math.random() * (max - min + 1) + min),
        rand = a + " + " + b;


    correctAnswer = a + b;
    // results.textContent = 'Ожидание';
    // time.textContent = '00.000';
    timeout = setTimeout(() => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = rand.toString();
        window.speechSynthesis.speak(msg);
        console.log(playedTime);

    }, rand * 1000);
}

function end(timeStamp){
    if(speechSynthesis.speaking){
        results.textContent = "Слишком быстро! Повторите попытку.";
        clearTimeout(timeout);
        window.speechSynthesis.cancel();
    } else {

        const currentTime = timeStamp - playedTime;

        time.textContent = formatTime(currentTime).toString();
        playedTime = 0;

    }
}

document.querySelector('button').addEventListener("click", evt => {
    document.querySelector('button').hidden = true;

    results.textContent = timesPassed + " из " + timesNeeded;
    // while (counts !== 3){
    //     sleep(1000);
    //     click();
    //     counts++;
    //     console.log(counts);
    //
    // }
    // if (counts === 3){
    //     console.log(resul);
    //     time.textContent = resul;
    //     let formData = new FormData();
    //     formData.append('results', resul);
    //     formData.append('table', 'resultSound');
    //     fetch('logic/DB/databaseJS.php', {
    //         body: formData,
    //         method: "POST"
    //     }).then(x => {
    //         if(x.statusText === "OK"){
    //             console.log('Data sent');
    //         } else {
    //             console.warn(x.statusText + " " + x.status);
    //         }
    click(evt);
}, {passive: false});

function checkEven(event){
    clearTimeout(timeout);
    window.speechSynthesis.cancel();
    let even = correctAnswer % 2 === 0;
    console.log("BRRRR " + performance.now())
    console.log("BRUH " + playedTime)
    console.log(formatTime(performance.now() - playedTime).toString())
    time.textContent = formatTime(performance.now() - playedTime).toString();
    if (event.currentTarget === inputEven && even) {
        console.debug('True');
        start();
        update();
    } else if (event.currentTarget === inputOdd && !even){
        console.debug('True');
        start();
        update();
    } else {
        console.debug('False')
        start();
    }
}
function update(){
    if(++timesPassed >= timesNeeded){
        window.speechSynthesis.cancel();
        document.querySelector('button').hidden = false;
        inputEven.hidden = true;
        inputOdd.hidden = true;
        started = false;
        timesPassed = 0;
        playedTime = 0;
        // TODO: FETCH
    } else {
        results.textContent = timesPassed + " из " + timesNeeded;
    }
}

inputEven.addEventListener('click', ev => checkEven(ev));
inputOdd.addEventListener('click', ev => checkEven(ev));