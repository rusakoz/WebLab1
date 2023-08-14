
const supers = document.querySelector('#super');

const buttonStart = document.querySelector('button');
const timer = document.querySelector('#timer');
const textTimer = document.querySelector('#logo1');
let timerTime;


var mins = 0;
var sec = 0;
var i = 0;

var good = 0;
var superGood = 0;
var loss = 0;

var goodPercent = 0;
var superPercent = 0;
var lossPercent = 0;

let teleportTime = 0;
let timerToSend = 0;


buttonStart.addEventListener('click', function () {

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

    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');

    var target = {x:270,y:120,dx:0,dy:0};
    var cursor = {x:270,y:120};
    var start = {x:270,y:120};

    var fonimg = new Image();
    fonimg.src = 'fon.jpg';

    var targetimg = new Image();
    targetimg.src = 'target.png';

    var cursorimg = new Image();
    cursorimg.src = 'cursor.png';

    var startimg = new Image();
    startimg.src = 'start.png';


    document.body.addEventListener('mousemove', function (event){
        cursor.x = event.clientX - 300;
        cursor.y = event.clientY - 200;

    })

    var moving = false;

    var flag = false;

    var flagTarget = true;

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
        game();

    }

    function game(){

        if (i<120){
            i++
            textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + "</h1>"

        }
        if (i === 120){
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
            let res = sum / count;
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


            window.location.replace("http://localhost/WebLab1/lab4/tracking.php");
            return;
        }

        update();
        render();
        requestAnimFrame(game);
    }

    let startTime = teleportTime - 2;
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
                startTime = teleportTime - 2;

                lock = false;

            }
            return true;
        }
    }

    function update(){
        // телепорт
        console.log(startTime +" "+ teleportTime)
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