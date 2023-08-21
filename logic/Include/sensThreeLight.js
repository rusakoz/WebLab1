var block = document.getElementById('sensThreeLight');
var block2 = document.getElementById('sensThreeLight2');
var block3 = document.getElementById('sensThreeLight3');
var block4 = document.getElementById('sensThreeLight4');
var block5 = document.getElementById('sensThreeLight5');
const time = document.querySelector('div.results h3')
const counter = document.querySelector('div.results span');
let coloredTime = 0;
let timeoutInterval;
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

let count = 0;
let resCount = 0;
let check = 0;

function func(){
    if(block.style.background === 'red' || block2.style.background === 'yellow' || block3.style.background === 'green'){
        return;
    }
    block.style.background = 'black';
    block2.style.background = 'black';
    block3.style.background = 'black';

    let rand = Math.floor(Math.random() * 3);

    if(rand === 0 && block.style.background !== 'red'){
        // block.style.background = 'black';
        // block2.style.background = 'black';
        // block3.style.background = 'black';
        block.style.background = 'red';
        count++;
        coloredTime = performance.now();
    }

    else if(rand === 1 && block2.style.background !== 'yellow'){
        // block.style.background = 'black';
        // block2.style.background = 'black';
        // block3.style.background = 'black';
        block2.style.background = 'yellow';
        count++;
        coloredTime = performance.now();
    }

    else if(rand === 2 && block3.style.background !== 'green'){
        // block.style.background = 'black';
        // block2.style.background = 'black';
        // block3.style.background = 'black';
        block3.style.background = 'green';
        count++;
        coloredTime = performance.now();
    }
}

function start(){
    check = 1;
    let delay = Math.random()*500+1500;
    timeoutInterval = setInterval(func, delay);
}

function dasd(){

    start();
    //console.log("kto")

    block.style.background = 'black';
    block2.style.background = 'black';
    block3.style.background = 'black';
    //console.log("312")
}

function evente() {
    document.querySelector('div.results p').hidden = false;
    block5.addEventListener('click', event => {

        if (event.button === 0 && check === 0) {
            dasd();
            //console.log('rer');
            block5.hidden = true;
            counter.textContent = '';
        } else if (event.button === 0 && check === 1) {
            check = 0;
            clearInterval(timeoutInterval);
            block.style.background = 'black';
            block2.style.background = 'black';
            block3.style.background = 'black';
            counter.textContent = "Слишком быстро!";
        } else if (event.button === 0 && check === 2) {
            block.style.background = 'black';
            block2.style.background = 'black';
            block3.style.background = 'black';
            counter.textContent = formatTime(performance.now() - coloredTime).toString();
            check = 0;
        }
    }, {passive: false, once: true});

}

// block.addEventListener('mousedown', event => {
//
//     if (event.button === 0 && block.style.background === 'red') {
//         resCount++;
//         block.style.background = 'black';
//         block2.style.background = 'black';
//         block3.style.background = 'black';
//     }
// }, {passive: false});
//
// block2.addEventListener('mousedown', event => {
//
//     if (event.button === 0 && block2.style.background === 'yellow') {
//         resCount++;
//         block.style.background = 'black';
//         block2.style.background = 'black';
//         block3.style.background = 'black';
//     }
// }, {passive: false});
//
// block3.addEventListener('mousedown', event => {
//
//     if (event.button === 0 && block3.style.background === 'green') {
//         resCount++;
//         block.style.background = 'black';
//         block2.style.background = 'black';
//         block3.style.background = 'black';
//     }
// }, {passive: false});

// block4.addEventListener('mousedown', event => {
//
//     if (event.button === 0 && check === 1) {
//         check = 0;
//         clearInterval(timeoutInterval);
//         block.style.background = 'black';
//         block2.style.background = 'black';
//         block3.style.background = 'black';
//         time.textContent = resCount + "из" + timesNeeded;
//
//         evente();
//     }
// }, {passive: false});

addEventListener('keypress', event => {
    if(event.key === 'z' && block.style.background === 'red') {
        update();
    } else if(event.key === 'x' && block2.style.background === 'yellow'){
        update();
    } else if(event.key === 'c' && block3.style.background === 'green'){
        update();
    }else {
        alert('Вы ошиблись, попробуйте прости тест еще раз')
        window.location.reload();
    }
})
evente();

function update() {

    block.style.background = 'black';
    block2.style.background = 'black';
    block3.style.background = 'black';
    if (++resCount >= timesNeeded){
        resul += parseFloat(formatTime(performance.now() - coloredTime));
        resul = parseFloat((resul / timesNeeded).toFixed(3));
        check = 0;
        clearInterval(timeoutInterval);
        time.textContent = '';

        counter.textContent = resCount + "из" + timesNeeded;
        resCount = 0;

        block5.hidden = false;

        let formData = new FormData();
        formData.append('results', resul);
        formData.append('table', 'resultThreeLight');
        fetch('logic/DB/databaseJS.php', {
            body: formData,
            method: "POST"
        }).then(function (response)  {
            return response.text()
        }).then(function (body) {
            console.log(body)
        })
        //     .then(x => {
        //     if(x.statusText === "OK"){
        //         console.log('Data sent');
        //     } else {
        //         console.warn(x.statusText + " " + x.status);
        //     }
        // })
        resul = 0;
        coloredTime = 0;
        window.location.replace('http://localhost/WebLab1/sens.php');

    } else {

        resul += parseFloat(formatTime(performance.now() - coloredTime));

        time.textContent = formatTime(performance.now() - coloredTime).toString();
        coloredTime = 0;
    }
}