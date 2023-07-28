var block = document.getElementById('buttonSens');
var block2 = document.getElementById('buttonSens2');
var block3 = document.getElementById('buttonSens3');
const info = document.querySelector('div.results p');
const stopText = document.querySelector('div.results b');
const counter = document.querySelector('div.results span');
const timesNeeded = 2;
let timesPassed = 0;
let resul = '';

const time = document.querySelector('div.results h3');
let coloredTime = 0;
let timeoutInterval;


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


let check = 0;
let timeout;
function func(){
    if (block.style.background !== 'red'){
        block.style.background = 'red';
        console.log("1");
    }
    else if(block.style.background === 'red' && block2.style.background !== 'red'){
        block2.style.background = 'red';
        console.log("2");
    }
    else if(block2.style.background === 'red' && block3.style.background !== 'red'){
        block3.style.background = 'red';
        console.log("3");
    }
    else if(block.style.background === 'red' && block2.style.background === 'red' && block3.style.background === 'red'){

            check = 2;
            block.style.background = 'green';
            block2.style.background = 'green';
            block3.style.background = 'green';

            coloredTime = performance.now().toString();

            clearInterval(timeoutInterval);

    }


}

function start(){
    check = 1;
    let delay = Math.random()*3000+1000;
    timeoutInterval = setInterval(func, delay);
}

function dasd(){

    start();
    console.log("kto")

    block.style.background = 'red';
    console.log("312")
}

document.querySelector('body').addEventListener('click', event =>{
    stopText.textContent = '';
    info.textContent = 'Нажмите, когда все круги станут зелёными.'
    if (check === 0){
        dasd();
        console.log('rer');
    }else if(check === 1){
        check = 0;
        clearInterval(timeoutInterval);
        block.style.background = 'black';
        block2.style.background = 'black';
        block3.style.background = 'black';
        time.textContent = "Слишком быстро!";
        info.textContent = "Нажмите для повтора";
        setTimeout ( () => {
            document.querySelector('body').dispatchEvent(new Event('click'));
        }, 100);
    }else if(check === 2){
        block.style.background = 'black';
        block2.style.background = 'black';
        block3.style.background = 'black';
        check = 0;
        update();
    }
}, {passive: false});

function update() {
    if (timesPassed === 0) {
        resul += formatTime(performance.now() - coloredTime);
    } else {
        resul += ',' + formatTime(performance.now() - coloredTime);
    }
    if(++timesPassed >= timesNeeded) {
        time.textContent = formatTime(performance.now() - coloredTime).toString();
        console.info(resul);
        console.info('End');
        timesPassed = 0;

        stopText.textContent = 'СТОП';
        info.textContent = "Нажмите для повтора теста";
        let formData = new FormData();
        formData.append('results', resul);
        formData.append('table', 'resultLight');
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
        resul = '';
    } else {
        time.textContent = formatTime(performance.now() - coloredTime).toString();
        console.info(resul);
        counter.textContent = timesPassed.toString() + ' из ' + timesNeeded.toString();
        setTimeout ( () => {
            document.querySelector('body').dispatchEvent(new Event('click'));
        }, 100);

    }
}

