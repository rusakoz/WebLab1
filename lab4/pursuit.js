


const supers = document.querySelector('#super');

const buttonStart = document.querySelector('button');
const timer = document.querySelector('#timer');
const textTimer = document.querySelector('#logo1');
let timerTime;
let stop;
let check

var mins = 0;
var sec = 0;
var i = 0;



    buttonStart.addEventListener('click', function () {

        timerTime = timer.value;
        mins = Math.floor(timerTime / 60)
        sec = timerTime % 60










        supers.innerHTML = "<canvas id=\"game\" width=\"600\" height=\"600\"></canvas>"

        textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + "</h1>"

        var canvas = document.getElementById('game');
        var context = canvas.getContext('2d');

        var target = {x:30,y:30,dx:1,dy:2}


        var fonimg = new Image();
        fonimg.src = 'fon.jpg';

        var targetimg = new Image();
        targetimg.src = 'target.png';

        var aimimg = new Image();
        aimimg.src = 'aim.png';

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
                window.location.replace("http://localhost/WebLab1/lab4/pursuit.php");
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
            context.drawImage(aimimg, 10, 10, 30, 30);
            context.drawImage(targetimg, target.x, target.y, 30, 30);
        }

        var requestAnimFrame = (function (){
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (callback){
                    window.setTimeout(callback, 1000 / 20)
                };

        })();

        // alert(start + " " +end);
        // buttonStart.remove();
        // timer.remove();

        //aim()

        // aim();


        /*while (true) {

            if (performance.now() >= end) {
                console.log(performance.now())
                stop = 1;
                return;
            }else aim()
        }*/


        // buttonStart.remove();
        // timer.remove();
        // alert(performance.now())

    },)


function aim() {
    let b = document.onmousemove = function () {
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',
            '<img src="https://cdn-icons-png.flaticon.com/512/63/63413.png" width="30" height="30" id="aim">');

        var aim = document.getElementById('aim');

        aim.style.position = 'fixed';

        let bb = document.onmousemove = function (event) {

            aim.style.left = event.clientX - 12 + 'px';
            aim.style.top = event.clientY - 12 + 'px';


        }
    }
}