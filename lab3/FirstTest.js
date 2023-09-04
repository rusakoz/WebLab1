const supers = document.querySelector('#super');

const buttonStart = document.querySelector('button');
const timer = document.querySelector('#timer');
const textTimer = document.querySelector('#logo1');
let timerTime;

let mins = 0;
let sec = 0;
let i = 0;

let far = 0;
let hit = 0;
let close = 0;
let loss = 0;

let farPercent = 0;
let closePercent = 0;
let hitPercent = 0;
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
    mins = Math.floor(timerTime / 60)
    sec = timerTime % 60








    supers.innerHTML = "<canvas id=\"game\" width=\"600\" height=\"300\" <!--style='cursor: none'-->></canvas>"

    textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + "</h1>"

    let canvas = document.getElementById('game');
    let context = canvas.getContext('2d');

    let circle = {x:0,y:0,dx:0,dy:0,angle:2.5,iterr:0.02}
    let target2 = {x:Math.floor(Math.random() * 570),y:Math.floor(Math.random() * 270),dx:1.0,dy:1.0}
    let aim = {x:150,y:150}
    let centerX = 300;
    let centerY = 150;
    let radiusCircle = 50;

    let rectangle = {x:centerX + Math.cos(4.7) * radiusCircle,y:centerY + Math.sin(4.7) * radiusCircle}
    let circle2 = {x:centerX + Math.cos(3) * radiusCircle,y:centerY + Math.sin(3) * radiusCircle}
    let circle3 = {x:centerX + Math.cos(3.17) * radiusCircle,y:centerY + Math.sin(3.17) * radiusCircle}
    let circle4 = {x:centerX + Math.cos(2.83) * radiusCircle,y:centerY + Math.sin(2.83) * radiusCircle}

    let fonimg = new Image();
    fonimg.src = '../logic/Include/image/fon.jpg';

    let circleimg = new Image();
    circleimg.src = '../logic/Include/image/blueCircle.png';

    let circleimg2 = new Image();
    circleimg2.src = '../logic/Include/image/greenCircle.png';

    let circleimg3 = new Image();
    circleimg3.src = '../logic/Include/image/yellowCircle.png';

    let circleimg4 = new Image();
    circleimg4.src = '../logic/Include/image/yellowCircle.png';


    let rectangleimg = new Image();
    rectangleimg.src = '../logic/Include/image/rectangle.png';

    document.addEventListener('keydown', function (event){
        event.preventDefault()
        if (event.code === 'Space'){

            //попадание
            if (Math.abs(circle2.x - circle.x) < 4.2 && Math.abs(circle2.y - circle.y) < 4.2){
                hit++
                console.debug('попал')
            }else if (Math.abs(circle3.x - circle.x) < 4 && Math.abs(circle3.y - circle.y) < 4){
                if (circle.iterr < 0){
                    close++
                    console.debug('недолет')
                }else {
                    far++
                    console.debug('перелет')
                }
            }else if (Math.abs(circle4.x - circle.x) < 4.2 && Math.abs(circle4.y - circle.y) < 4.2){
                if (circle.iterr < 0){
                    far++
                    console.debug('перелет')
                }else {
                    close++
                    console.debug('недолет')
                }
            }else {
                loss++
                console.debug('не попал')
            }

        }
    })


    fonimg.onload = function (){
        game();
    }

    function game(){

        if (i < Math.floor(fps)){
            i++
            textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + " " + hit + ":" + far + ":" + close + ":" + loss + "</h1>"

        }
        if (i === Math.floor(fps)){
            if (sec > 0){
                sec--
                i = 0
                textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + " " + hit + ":" + far + ":" + close + ":" + loss + "</h1>"
            }
        }
        if (sec === 0){
            if (mins > 0){
                mins--
                sec = 60
                textTimer.innerHTML = "<h1>" + " " + mins + ":" + sec + " " + hit + ":" + far + ":" + close + ":" + loss + "</h1>"
            }
        }

        if (sec === 0 && mins === 0){

            let sum = hit + far + close + loss;
            hitPercent = Math.floor((hit * 100) / sum)
            farPercent = Math.floor((far * 100) / sum)
            closePercent = Math.floor((close * 100) / sum)
            lossPercent = Math.floor((loss * 100) / sum)
            textTimer.innerHTML = "<h1>"  + farPercent + ":" + hitPercent + ":" + closePercent + ":" + lossPercent + "</h1>"
            let formData = new FormData();
            formData.append('hit', hitPercent);
            formData.append('far', farPercent);
            formData.append('close', closePercent);
            formData.append('loss', lossPercent);
            formData.append('time', timerTime);
            formData.append('table', 'resultLab3-1');
            fetch('../logic/DB/lab3-1DB.php', {
                method: 'POST',
                body: formData
            }).then(function (response)  {
                return response.text()
            }).then(function (body) {
                console.log(body)
            })


            window.location.replace("http://localhost/WebLab1/lab3/main-lab3.php");
            return;
        }

        update();
        render();
        requestAnimFrame(game);
    }

    function update(){
        // физика

        circle.x = centerX + Math.cos(circle.angle) * radiusCircle
        circle.y = centerY + Math.sin(circle.angle) * radiusCircle
        if (Math.abs(rectangle.x-10 - circle.x) < 3 && Math.abs(rectangle.y - circle.y) < 3){
            circle.iterr = -circle.iterr
            circle.angle += circle.iterr * 2
        }
        circle.angle += circle.iterr



    }

    function render(){
        context.drawImage(fonimg, 0, 0, 600, 300);
        drawRotated(context, rectangleimg, rectangle.x, rectangle.y, 90)
        context.drawImage(circleimg2, circle2.x, circle2.y, 9, 9);
        context.drawImage(circleimg3, circle3.x, circle3.y, 9, 9);
        context.drawImage(circleimg4, circle4.x, circle4.y, 9, 9);
        context.drawImage(circleimg, circle.x, circle.y, 7, 7);


    }

    function drawRotated(context, image, imageX, imageY, degrees) {
        context.save();
        context.translate(imageX, imageY);
        context.rotate(0.017453292519943295 * degrees);  // 0.017453292519943295 == Math.PI / 180
        context.drawImage(image, 0, 0, 10, 10);
        context.restore();
    }

    let requestAnimFrame = (function (){
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback){
                window.setTimeout(callback, 1000 / 20)
            };

    })();

},)