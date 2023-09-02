const supers = document.querySelector('#super');

const buttonStart = document.querySelector('button');
const timer = document.querySelector('#timer');
const textTimer = document.querySelector('#logo1');
let timerTime;
let time;

let mins = 0;
let sec = 0;
let i = 0;

let good = 0;
let superGood = 0;
let loss = 0;

let goodPercent = 0;
let superPercent = 0;
let lossPercent = 0;

let fps = 60;
let fpss = 0;


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
    time = timerTime;
    mins = Math.floor(timerTime / 60)
    sec = timerTime % 60










    supers.innerHTML = "<canvas id=\"game\" width=\"600\" height=\"300\" style='cursor: none'></canvas>"

    textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + "</h1>"

    let canvas = document.getElementById('game');
    let context = canvas.getContext('2d');

    let target = {x:Math.floor(Math.random() * 570),y:Math.floor(Math.random() * 270),dx:1.0,dy:1.0}
    let aim = {x:150,y:150}


    let fonimg = new Image();
    fonimg.src = 'image/fon.jpg';

    let targetimg = new Image();
    targetimg.src = 'image/target.png';

    let aimimg = new Image();
    aimimg.src = 'image/aim.png';

    canvas.addEventListener('mousemove', function (event){
        aim.x = event.offsetX - 300;
        aim.y = event.offsetY - 150;
    })

    fonimg.onload = function (){
        game();
    }

    function game(){

        if (i < Math.floor(fps)){
            i++
            textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + " " + good + ":" + superGood + ":" + loss + "</h1>"

        }
        if (i === Math.floor(fps)){
            if (sec > 0){
                sec--
                time--
                i = 0
                textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + " " + good + ":" + superGood + ":" + loss + "</h1>"
            }
        }
        if (sec === 0){
            if (mins > 0){
                mins--
                sec = 60
                textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + " " + good + ":" + superGood + ":" + loss + "</h1>"
            }
        }

        if (sec === 0 && mins === 0){

            // let sum = good + superGood + loss;
            // superPercent = Math.floor((superGood * 100) / sum)
            // goodPercent = Math.floor((good * 100) / sum)
            // lossPercent = Math.floor((loss * 100) / sum)
            // textTimer.innerHTML = "<h1>"  + goodPercent + ":" + superPercent + ":" + lossPercent + "</h1>"
            // let formData = new FormData();
            // formData.append('super', superPercent);
            // formData.append('good', goodPercent);
            // formData.append('loss', lossPercent);
            // formData.append('time', timerTime);
            // formData.append('table', 'resultLab4-2');
            // fetch('../logic/DB/lab4-2DB.php', {
            //     method: 'POST',
            //     body: formData
            // }).then(function (response)  {
            //     return response.text()
            // }).then(function (body) {
            //     console.log(body)
            // })


            window.location.replace("http://localhost/WebLab1/lab6/main-lab6.php");
            return;
        }

        update();
        render();
        requestAnimFrame(game);
    }

    function update(){
        // физика
        target.x = target.x + target.dx;
        target.y = target.y + target.dy

        //границы
        if(target.x >= 570 || target.x < 0){
            target.dx = -target.dx
        }
        if(target.y >= 270 || target.y < 0){
            target.dy = -target.dy
        }
        //вычисление попадания
        if (Math.abs(target.x - aim.x) < 15 && Math.abs(target.y - aim.y) < 15){
            superGood++
        }
        else if (Math.abs(target.x - aim.x) < 30 && Math.abs(target.y - aim.y) < 30){
            good++
        }else {
            loss++
        }
        //Ускорение
        if ((timerTime - Math.floor(timerTime / 3)) > time){
            if (target.dx < 0){
                target.dx = -1.5;
            }else target.dx = 1.5;
            if (target.dy < 0){
                target.dy = -1.5;
            }else target.dy = 1.5;
        }
        if((timerTime - Math.floor(timerTime / 1.5)) > time){
            if (target.dx < 0){
                target.dx = -2.0;
            }else target.dx = 2.0;
            if (target.dy < 0){
                target.dy = -2.0;
            }else target.dy = 2.0;
        }
    }

    function render(){
        context.drawImage(fonimg, 0, 0, 600, 300);
        context.drawImage(targetimg, target.x, target.y, 30, 30);
        context.drawImage(aimimg, aim.x, aim.y, 30, 30);
    }

    let requestAnimFrame = (function (){
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback){
                window.setTimeout(callback, 1000 / 20)
            };

    })();

},)
