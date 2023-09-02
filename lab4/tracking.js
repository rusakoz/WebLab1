
const supers = document.querySelector('#super');

const buttonStart = document.querySelector('button');
const timer = document.querySelector('#timer');
const textTimer = document.querySelector('#logo1');
let timerTime;


let mins = 0;
let sec = 0;
let i = 0;


let teleportTime = 0;
let timerToSend = 0;

let fps = 60;
let fpss = 0;
var previousTimestamp;

buttonStart.addEventListener('click', function () {

    // Вычисление FPS для таймера
    function returnFPS() {
        const raf = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame

        const rafLoop = timestamp => {
            if (fpss !== 0){
                fps = fpss
                return;
            }
            let interval = timestamp - previousTimestamp;
            fpss = 1000 / interval;
            previousTimestamp = timestamp;
            raf(rafLoop);
        };
        raf(timestamp => {
            previousTimestamp = timestamp;
            raf(rafLoop);
        });
    }

    returnFPS();


    timerTime = timer.value;
    timerToSend = timer.value;
    mins = Math.floor(timerTime / 60);
    sec = timerTime % 60;

    // if (sec === 0){
    //     teleportTime = 60;
    // }else teleportTime = sec;

    teleportTime = timerTime;









    supers.innerHTML = "<canvas id=\"game\" width=\"600\" height=\"300\" style='cursor: none'></canvas>";

    textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + "</h1>";

    let canvas = document.getElementById('game');
    let context = canvas.getContext('2d');

    let target = {x:270,y:120,dx:0,dy:0};
    let cursor = {x:270,y:120};
    let start = {x:270,y:120};

    let fonimg = new Image();
    fonimg.src = '../logic/Include/image/fon.jpg';

    let targetimg = new Image();
    targetimg.src = '../logic/Include/image/target.png';

    let cursorimg = new Image();
    cursorimg.src = '../logic/Include/image/cursor.png';

    let startimg = new Image();
    startimg.src = '../logic/Include/image/start.png';


    document.body.addEventListener('mousemove', function (event){
        cursor.x = event.clientX - 300;
        cursor.y = event.clientY - 200;

    })

    let moving = false;

    let flag = false;


    canvas.addEventListener("mousedown", initialClick, false)

    function move(e){


        //var newX = e.clientX / 1.9 - 65;
        //var newY = e.clientY / 1.9 - 75;

        if (Math.abs(target.x - cursor.x) < 30 && Math.abs(target.y - cursor.y) < 30){

            flag = true;

            target.x = cursor.x - 12;
            target.y = cursor.y - 12;


        }
        if (flag){

            target.x = cursor.x - 12;
            target.y = cursor.y - 12;

        }
    }

    function initialClick(e) {

        if(moving){
            document.removeEventListener("mousemove", move);
            moving = !moving;
            flag = false;
            return;
        }

        moving = !moving;
        image = this;

        document.addEventListener("mousemove", move, false);

    }




    fonimg.onload = function (){

        setTimeout(game, 150); // Таймаут нужен для того, чтобы функция returnFPS успела высчитать FPS

    }

    function game(){


        if (i < Math.floor(fps)){
            i++
            textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + "</h1>"

        }
        if (i === Math.floor(fps)){
            if (sec > 0){
                sec--
                timerTime--
                i = 0
                textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + "</h1>"
            }
        }
        if (sec === 0){
            if (mins > 0){
                mins--
                sec = 60
                textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + "</h1>"
            }
        }

        if (sec === 0 && mins === 0){

            let formData = new FormData();
            let res = parseFloat((sum / count).toFixed(2));
            formData.append('time', timerToSend);
            formData.append('result', res);
            formData.append('table', 'resultLab4-1');
            fetch('../logic/DB/lab4-1DB.php', {
                method: 'POST',
                body: formData
            }).then(function (response)  {
                return response.text()
            }).then(function (body) {
                console.log(body)
            })


            window.location.replace("http://localhost/WebLab1/lab4/main-lab4.php");
            return;
        }

        update();
        render();
        requestAnimFrame(game);
    }

    let startTime = teleportTime - 2; // интервал телепорта
    let delta;
    let sum = 0;
    let count = 0;

    let lock = false;


    function checkTarget(){
        if (Math.abs(target.x - start.x) < 30 && Math.abs(target.y - start.y) < 30){
            if (lock){

                delta = startTime - timerTime;
                sum = sum + delta;
                count++;

                teleportTime = timerTime;
                startTime = teleportTime - 2; // интервал телепорта

                lock = false;

            }
            return true;
        }
    }

    function update(){
        // телепорт
        if (checkTarget() && startTime > teleportTime){
            target.x = Math.random() * 500 + 100;
            target.y = Math.random() * 200 + 100;
            lock = true;
        }else {
            teleportTime = timerTime;
        }


        //границы
        if(target.x >= 570){
            target.x = 570
        }
        if(target.x < 0){
            target.x = 0.1
        }
        if(target.y >= 270){
            target.y = 270
        }
        if(target.y < 0){
            target.y = 0.1
        }

        if(cursor.x >= 590){
            cursor.x = 590
        }
        if(cursor.x < 0){
            cursor.x = 0.1
        }
        if(cursor.y >= 290){
            cursor.y = 290
        }
        if(cursor.y < 0){
            cursor.y = 0.1
        }

    }

    function render(){
        context.drawImage(fonimg, 0, 0, 600, 300);
        context.drawImage(startimg, start.x, start.y, 30, 30);
        context.drawImage(targetimg, target.x, target.y, 30, 30);
        context.drawImage(cursorimg, cursor.x, cursor.y, 10, 10);
    }

    var requestAnimFrame = (function (){
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback){
                window.setTimeout(callback, 1000 / 20)
            };

    })();

},)