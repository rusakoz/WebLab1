


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


buttonStart.addEventListener('click', function () {

    timerTime = timer.value;
    mins = Math.floor(timerTime / 60)
    sec = timerTime % 60










    supers.innerHTML = "<canvas id=\"game\" width=\"600\" height=\"300\"></canvas>"

    textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + "</h1>"

    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');

    var target = {x:270,y:120,dx:0,dy:0}


    var fonimg = new Image();
    fonimg.src = 'fon.jpg';

    var targetimg = new Image();
    targetimg.src = 'target.png';



    var moving = false;




    canvas.addEventListener("mousedown", initialClick, false)

    function move(e){


        var newX = e.clientX / 1.9 - 65;
        var newY = e.clientY / 1.9 - 75;

        if (Math.abs(target.x - newX) < 40 && Math.abs(target.y - newY) < 40){

            target.x = newX;
            target.y = newY;

        }
    }

    function initialClick(e) {

        if(moving){
            document.removeEventListener("mousemove", move);
            moving = !moving;
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
            textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + " " + good + ":" + superGood + ":" + loss + "</h1>"

        }
        if (i === 120){
            if (sec > 0){
                sec--
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


            window.location.replace("http://localhost/WebLab1/lab4/tracking.php");
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



    }

    function render(){
        context.drawImage(fonimg, 0, 0, 600, 300);
        context.drawImage(targetimg, target.x, target.y, 30, 30);

    }

    var requestAnimFrame = (function (){
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback){
                window.setTimeout(callback, 1000 / 20)
            };

    })();

},)