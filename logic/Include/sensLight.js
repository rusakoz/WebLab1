var block = document.getElementById('buttonSens');
var block2 = document.getElementById('buttonSens2');
var block3 = document.getElementById('buttonSens3');

const blockTime = document.querySelector('.time');
blockTime.innerHTML = 0;

function Time(){
    if(blockTime.innerHTML > 0){
        blockTime.innerHTML--;
    }
}



// document.onmousedown = function () {
//     block.style.background = 'black';
//     //dasd();
// }
// document.onmousedown = function () {
//     block.style.background = 'red';
//     //dasd();
// }

let timeout;
let check = 0;

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
        block.style.background = 'green';
        block2.style.background = 'green';
        block3.style.background = 'green';
        clearInterval(timeout);
        check = 0;
    }


}

function start(){
    check = 1;
    const delay = Math.random()*4000+1000;
    timeout = setInterval(func, delay);
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
    }else if(event.button === 0 && check === 1){
        clearInterval(timeout);
        block.style.background = 'pink';
    }
}, {passive: false});

