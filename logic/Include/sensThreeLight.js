var block = document.getElementById('sensThreeLight');
var block2 = document.getElementById('sensThreeLight2');
var block3 = document.getElementById('sensThreeLight3');
var block4 = document.getElementById('sensThreeLight4');
var block5 = document.getElementById('sensThreeLight5');

const time = document.querySelector('div.results h3');
let coloredTime = 0;
let timeoutInterval;


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
let timeout;
function func(){
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
    }

    else if(rand === 1 && block2.style.background !== 'yellow'){
        // block.style.background = 'black';
        // block2.style.background = 'black';
        // block3.style.background = 'black';
        block2.style.background = 'yellow';
        count++;
    }

    else if(rand === 2 && block3.style.background !== 'green'){
        // block.style.background = 'black';
        // block2.style.background = 'black';
        // block3.style.background = 'black';
        block3.style.background = 'green';
        count++;
    }
}

function start(){
    check = 1;
    let delay = Math.random()*400+700;
    timeoutInterval = setInterval(func, delay);
}

function dasd(){

    start();
    console.log("kto")

    block.style.background = 'black';
    block2.style.background = 'black';
    block3.style.background = 'black';
    console.log("312")
}

function evente() {
    block5.addEventListener('click', event => {

        if (event.button === 0 && check === 0) {
            dasd();
            console.log('rer');
        } else if (event.button === 0 && check === 1) {
            check = 0;
            clearInterval(timeoutInterval);
            block.style.background = 'black';
            block2.style.background = 'black';
            block3.style.background = 'black';
            time.textContent = "Слишком быстро!";
        } else if (event.button === 0 && check === 2) {
            block.style.background = 'black';
            block2.style.background = 'black';
            block3.style.background = 'black';
            time.textContent = formatTime(performance.now() - coloredTime).toString();
            check = 0;
        }
    }, {passive: false, once: true});

}

block.addEventListener('mousedown', event => {

    if (event.button === 0 && block.style.background === 'red') {
        resCount++;
        block.style.background = 'black';
        block2.style.background = 'black';
        block3.style.background = 'black';
    }
}, {passive: false});

block2.addEventListener('mousedown', event => {

    if (event.button === 0 && block2.style.background === 'yellow') {
        resCount++;
        block.style.background = 'black';
        block2.style.background = 'black';
        block3.style.background = 'black';
    }
}, {passive: false});

block3.addEventListener('mousedown', event => {

    if (event.button === 0 && block3.style.background === 'green') {
        resCount++;
        block.style.background = 'black';
        block2.style.background = 'black';
        block3.style.background = 'black';
    }
}, {passive: false});

block4.addEventListener('mousedown', event => {

    if (event.button === 0 && check === 1) {
        check = 0;
        clearInterval(timeoutInterval);
        block.style.background = 'black';
        block2.style.background = 'black';
        block3.style.background = 'black';
        time.textContent = resCount + "из" + count;

        evente();
    }
}, {passive: false});
evente();