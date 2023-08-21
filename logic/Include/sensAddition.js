const inputEven = document.querySelector('#even');
const inputOdd = document.querySelector('#odd')
const results = document.querySelector('div.results p');
const time = document.querySelector('div.time p');
const randomNums = document.querySelector('p.randomNums');
const startButton = document.querySelector('button')
let started = false;
let playedTime = 0;
let timeout;
let correctAnswer;
let counts = 0;
const timesNeeded = 3;
let resul = 0;

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

function click(evt){
    //console.debug('here1');
    let timeStamp = performance.now();
    if (started){
        started = false;
        //console.debug('here2')
        end(timeStamp, evt);

    } else {
        started = true;
        //console.debug('here3')
        start(evt);

    }
}

function start(evt){
    inputEven.hidden = false;
    inputOdd.hidden = false;
    let min = 10,
        max = 100;
    let a = Math.floor(Math.random() * (max - min + 1) + min),
        b = Math.floor(Math.random() * (max - min + 1) + min),
        rand = a + " + " + b;


    correctAnswer = a + b;
    timeout = setTimeout(() => {
        randomNums.textContent = rand;
        playedTime = performance.now();

    }, rand * 1000);
}

function end(timeStamp, evt){
    if(!playedTime){
        results.textContent = "Слишком быстро! Повторите попытку.";

        clearTimeout(timeout);
    } else {
        console.debug(timeStamp);
        console.debug(playedTime);
        const currentTime = timeStamp - playedTime;
        if ((evt.target === inputEven && correctAnswer % 2 === 0) ||
            (evt.target === inputOdd && correctAnswer % 2 !== 0)){
            //console.log('Right');
            results.textContent = "Верно";
            if(counts === 0){
                resul += parseFloat(formatTime(currentTime));
            } else {
                resul += parseFloat(formatTime(currentTime));
            }
            counts += 1;

            if (counts === timesNeeded) {
                resul = (resul / counts).toFixed(3);
                //console.log ('END' + " " + resul);
                startButton.hidden = false;
                inputEven.hidden = true;
                inputOdd.hidden = true;
                randomNums.textContent = "";
                counts = 0;
                //console.log('Met')
                let formData = new FormData();
                formData.append('results', resul);
                formData.append('table', 'resultAddition');
                fetch('logic/DB/databaseJS.php', {
                    body: formData,
                    method: "POST"
                }).then(function (response)  {
                    return response.text()
                }).then(function (body) {
                    console.log(body)
                })
                resul = 0;
                window.location.replace('http://localhost/WebLab1/sens.php');
                return;
            }

        } else {
            results.textContent = "Неверно";
            //console.log(correctAnswer);
        }
        time.textContent = formatTime(currentTime).toString();
        playedTime = 0;

    }
    //console.debug('here12344')
    inputEven.hidden = true;
    inputOdd.hidden = true;
    click();
}

// document.querySelector('body').addEventListener("click", evt => {
//     if (counts === timesNeeded){
//         console.log(resul);
//         time.textContent = resul;
//         let formData = new FormData();
//         formData.append('results', resul);
//         formData.append('table', 'resultAddition');
//         fetch('logic/DB/databaseJS.php', {
//             body: formData,
//             method: "POST"
//         }).then(x => {
//             if(x.statusText === "OK"){
//                 console.log('Data sent');
//             } else {
//                 console.warn(x.statusText + " " + x.status);
//             }
//         })
//
//     }
//
// }, {passive: false});

inputOdd.addEventListener('click', (evt => click(evt)));
inputEven.addEventListener('click', (evt => click(evt)));
startButton.addEventListener('click', () => {
    startButton.hidden = true;
    click();
})