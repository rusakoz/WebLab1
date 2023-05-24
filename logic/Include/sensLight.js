var block = document.getElementById('buttonSens');
var block2 = document.getElementById('buttonSens2');
var block3 = document.getElementById('buttonSens3');

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

addEventListener('mousedown', event =>{

    if (event.button === 0 && check === 0){
        dasd();
        console.log('rer');
    }else if(event.button === 0 && check === 1){
        check = 0;
        clearInterval(timeoutInterval);
        block.style.background = 'black';
        block2.style.background = 'black';
        block3.style.background = 'black';
        time.textContent = "Слишком быстро!";
    }else if(event.button === 0 && check === 2){
        block.style.background = 'black';
        block2.style.background = 'black';
        block3.style.background = 'black';
        time.textContent = formatTime(performance.now() - coloredTime).toString();
        check = 0;
    }
}, {passive: false});

