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
let resul = 0;
let flat = true;

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
        console.debug('END')
    } else {
        start();
        started = true;
        console.debug('START')
    }
}

function start(){
    //playedTime = performance.now();

        console.debug(" AAAAA " + playedTime)
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
        timeout = setTimeout(async () => {
            let msg = new SpeechSynthesisUtterance();
            msg.text = rand.toString();
            await window.speechSynthesis.speak(msg);
            playedTime = performance.now();
            console.debug(playedTime);

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

document.querySelector('#button-main').addEventListener("click", evt => {
    document.querySelector('#button-main').hidden = true;

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

async function checkEven(event){
    clearTimeout(timeout);
    window.speechSynthesis.cancel();
    let even = correctAnswer % 2 === 0;
    console.debug("BRRRR " + performance.now())
    console.debug("BRUH " + playedTime)
    console.debug(formatTime(performance.now() - playedTime).toString())
    time.textContent = formatTime(performance.now() - playedTime).toString();
    if (event.currentTarget === inputEven && even) {
        console.debug('True');
        await start();
        update();
    } else if (event.currentTarget === inputOdd && !even){
        console.debug('True');
        await start();
        update();
    }
    else {
        console.debug('False')
        start();
    }
}
async function update(){
    if(++timesPassed >= timesNeeded){


        resul += parseFloat(performance.now() - playedTime);
        resul = (resul / timesNeeded).toFixed(3);

        //resul += performance.now() - playedTime;
        console.debug("!!!"+resul+"!!!"+playedTime)
        window.speechSynthesis.cancel();
        document.querySelector('button').hidden = false;
        inputEven.hidden = true;
        inputOdd.hidden = true;
        started = false;
        timesPassed = 0;
        playedTime = 0;
        let formData = new FormData();
        formData.append('results', resul);
        formData.append('table', 'resultHardSound');
        await fetch('logic/DB/databaseJS.php', {
            body: formData,
            method: "POST"
        }).then(function (response)  {
            resul = '';
            return response.text()
        }).then(function (body) {
            console.log(body)
        })

        window.location.replace('http://localhost/WebLab1/sens.php');
    } else {
        if (resul === ''){
            resul += parseFloat(performance.now() - playedTime);
            results.textContent = timesPassed + " из " + timesNeeded;
        }else {
            resul += parseFloat(performance.now() - playedTime);
            results.textContent = timesPassed + " из " + timesNeeded;
        }
    }
}

inputEven.addEventListener('click', ev => checkEven(ev));
inputOdd.addEventListener('click', ev => checkEven(ev));