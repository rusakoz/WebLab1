let block = document.getElementById('buttonSens');
let block2 = document.getElementById('buttonSens2');
let block3 = document.getElementById('buttonSens3');
const info = document.querySelector('div.results p');
const stopText = document.querySelector('div.results b');
const counter = document.querySelector('div.results span');
const timesNeeded = 10;
let timesPassed = 0;
let resul = 0;
block2.remove();
block3.remove();

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

function func(){
    if (block.style.background !== 'red'){
        block.style.background = 'red';
        //console.log("1");
    }
    // else if(block.style.background === 'red' && block2.style.background !== 'red'){
    //     block2.style.background = 'red';
    //     console.log("2");
    // }
    // else if(block2.style.background === 'red' && block3.style.background !== 'red'){
    //     block3.style.background = 'red';
    //     console.log("3");
    // }
    else if(block.style.background === 'red'){

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
    //console.log("kto")

    block.style.background = 'red';
    //console.log("312")
}

document.querySelector('body').addEventListener('click', event =>{
    stopText.textContent = '';
    info.textContent = 'Нажмите, когда все круги станут зелёными.'
    if (check === 0){
        dasd();
        //console.log('rer');
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

    resul += parseFloat(formatTime(performance.now() - coloredTime));

    if(++timesPassed >= timesNeeded) {
        time.textContent = formatTime(performance.now() - coloredTime).toString();
        //console.info(resul);
        //console.info('End');
        counter.textContent = timesPassed.toString() + ' из ' + timesNeeded.toString();
        timesPassed = 0;

        resul = parseFloat((resul / timesNeeded).toFixed(3));
        stopText.textContent = 'СТОП';
        info.textContent = "Нажмите для повтора теста";
        let formData = new FormData();
        formData.append('results', resul);
        formData.append('table', 'resultLight');
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

    } else {
        time.textContent = formatTime(performance.now() - coloredTime).toString();
        //console.info(resul);
        counter.textContent = timesPassed.toString() + ' из ' + timesNeeded.toString();
        setTimeout ( () => {
            document.querySelector('body').dispatchEvent(new Event('click'));
        }, 100);

    }
}

