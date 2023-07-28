<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: inline-block;
            position: relative;
            height: 300px;
            width: 300px;
            border: 1px solid black;
        }
        .circle {
            position: absolute;
            top: 200px;
            left: 200px;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: red;
        }
        .line {
            position: absolute;
            top: 70px;
            left: 140px;
            height: 2px;
            width: 10px;
            background-color: blue;
        }
        .target {
            position: absolute;
            top: 200px;
            left: 60px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: green;
        }
        .secondary_target {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: yellow;
        }
        .secondary_target.hit {
            background-color: aqua;
        }
    </style>
</head>
<body>
<div class="container">
    <div id="1" class="circle"></div>
    <div class="line"></div>
    <div class="target"></div>
    <div class="secondary_target" style="top: 218px; left: 65px;"></div>
    <div class="secondary_target" style="top: 181px; left: 65px;"></div>
    <div class="secondary_target" style="top: 166px; left: 70px;"></div>
    <div class="secondary_target" style="top: 235px; left: 70px;"></div>
</div>

<div class="container">
    <div id="2" class="circle"></div>
    <div class="line"></div>
    <div class="target"></div>
    <div class="secondary_target" style="top: 218px; left: 65px;"></div>
    <div class="secondary_target" style="top: 181px; left: 65px;"></div>
    <div class="secondary_target" style="top: 166px; left: 70px;"></div>
    <div class="secondary_target" style="top: 235px; left: 70px;"></div>
</div>

<div class="container">
    <div id="3" class="circle"></div>
    <div class="line"></div>
    <div class="target"></div>
    <div class="secondary_target" style="top: 218px; left: 65px;"></div>
    <div class="secondary_target" style="top: 181px; left: 65px;"></div>
    <div class="secondary_target" style="top: 166px; left: 70px;"></div>
    <div class="secondary_target" style="top: 235px; left: 70px;"></div>
</div>
<h1 id="time">00.000</h1>


<script>
    var container = document.querySelector(".container");
    // var circle = document.getElementById("circle");
    // var line = document.querySelector("line");
    // var target = document.getElementById("target");
    // var earlyStart = document.getElementById("earlyStart");
    // var latePress = document.getElementById("latePress");
    var radius = 100; // Adjust this value to change the radius
    let angle1 = 0;
    let angle2 = 0;
    let angle3 = 0;
    var direction1 = 1;
    var direction2 = 1;
    var direction3 = 1;
    var collided1 = false;
    var collided2 = false;
    var collided3 = false;
    var targetReached = false;
    var targetReachedTimeStamp = 0;
    var secondaryTargetReached = false;
    var secondaryTargetReachedTimestamp = 0;
    let targetHit = 0;


        let circles = document.getElementsByClassName('circle');
        console.log(circles.item(0));
        let targets = document.getElementsByClassName('target');
        let lines = document.getElementsByClassName('line');
        console.warn(lines)


    function moveFirstCircle(){

            let circle = circles.item(0);
            let target = targets.item(0);
            let line = lines.item(0);
            let step = 0.02
            // Calculate the circle's position along the radius
            var x = container.clientWidth / 2 + radius * Math.cos(angle1);
            var y = container.clientHeight / 2 + radius * Math.sin(angle1);
            // console.log(step);
            // Update the circle's position
            circle.style.left = x + "px";
            circle.style.top = y + "px";

            // Adjust the angle
            angle1 += step * direction1;

            // Check if the circle should bounce off the line
            var lineRect = line.getBoundingClientRect();
            var circleRect = circle.getBoundingClientRect();
            var targetRect = target.getBoundingClientRect();
            var circleCenterX = circleRect.left + circleRect.width / 2;
            var circleCenterY = circleRect.top + circleRect.height / 2;

            // let dxEarly = earlyStartRect.x - circleRect.x;
            // let dyEarly = earlyStartRect.y - circleRect.y;
            // let distanceEarly = Math.sqrt(dxEarly * dxEarly + dyEarly * dyEarly);
            // let sumOfRadiiEarly = circleRect.width / 2 + earlyStartRect.width / 2;
            // let dxLate = latePressRect.x - circleRect.x;
            // let dyLate = latePressRect.y - circleRect.y;
            // let distanceLate = Math.sqrt(dxLate * dxLate + dyLate * dyLate);
            // let sumOfRadiiLate = circleRect.width / 2 + latePressRect.width / 2;

            let dxTarget = circleRect.x - targetRect.x;
            let dyTarget = circleRect.y - targetRect.y;
            let distanceTarget = Math.sqrt(dxTarget * dxTarget + dyTarget * dyTarget);
            let sumOfRadiiTarget = circleRect.width / 2 + targetRect.width / 2;

            if (
                !collided1 &&
                circleCenterY + circleRect.height / 2 >= lineRect.top &&
                circleCenterY - circleRect.height / 2 <= lineRect.bottom &&
                ((direction1 === 1 && circleCenterX + circleRect.width / 2 >= lineRect.left) ||
                    (direction1 === -1 && circleCenterX - circleRect.width / 2 <= lineRect.right))
            ) {
                console.warn('Hit')
                console.log(targetHit - targetReachedTimeStamp);
                if (targetHit){
                    document.querySelector('#time').textContent = formatTime(targetHit - targetReachedTimeStamp);
                    targetHit = 0;
                }
                collided1 = true; // Set collided flag to true
                setTimeout(function () {
                    collided1 = false; // Reset collided flag after a delay
                }, 1000);
                direction1 *= -1; // Reverse the direction1
            }

            // !targetReached &&
            // circleRect.x >= targetRect.x - 10 &&
            // circleRect.x <= targetRect.x + 10
            // Check if the circle collides with the target
            if (
                distanceTarget < sumOfRadiiTarget
            ) {
                target.style.backgroundColor = "orange";
                targetReached = true;
                targetReachedTimeStamp = performance.now();
                // console.log(dxTarget + ' ' + dyTarget + ' ' + distanceTarget + ' ' + sumOfRadiiTarget)
            } else {
                target.style.backgroundColor = "green";
                targetReached = false;
            }

            // // !targetReached && ((circleRect.x + circleRect.width / 2 >= earlyStartRect.x - 10 &&
            // //     circleRect.x + circleRect.width / 2 <= earlyStartRect.x + 10) ||
            // //     (circleRect.x + circleRect.width / 2 >= latePressRect.x - 10 &&
            // //         circleRect.x + circleRect.width / 2 <= latePressRect.x + 10))
            // if (!targetReached && distanceEarly < sumOfRadiiEarly ||
            //     (circleRect.x + circleRect.width / 2 >= latePressRect.x - 10 &&
            //     circleRect.x + circleRect.width / 2 <= latePressRect.x + 10))) {
            //     console.log(earlyStartRect.x - 10)
            //     console.log(circleRect.x + ' ' + (earlyStartRect.x - 10));
            //     console.log(circleRect.x + ' ' + (earlyStartRect.x + 10));
            //     console.log(circleRect.x + ' ' +  (latePressRect.x - 10));
            //     console.log(circleRect.x + ' ' + (latePressRect.x + 10));
            //     secondaryTargetReached = true;
            //     secondaryTargetReachedTimestamp = performance.now();
            //     console.log(secondaryTargetReached)
            // } else {
            //     // setTimeout(() => {
            //     //     secondaryTargetReached = false;
            //     // }, 2000)
            //     secondaryTargetReached = false;
            //
            // }

            for (let elementsByClassNameElement of circle.parentElement.getElementsByClassName('secondary_target')) {
                checkCollision(elementsByClassNameElement, 0);
                if (secondaryTargetReached) { break; }
            }

            // Request the next animation frame
            //requestAnimationFrame(moveFirstCircle);
        }


    function moveSecondCircle() {
        let circle = circles.item(1);
        let target = targets.item(1);
        let line = lines.item(1);
        let step = 0.04
        // Calculate the circle's position along the radius
        var x = circle.parentElement.clientWidth / 2 + radius * Math.cos(angle2);
        var y = circle.parentElement.clientHeight / 2 + radius * Math.sin(angle2);
        //console.log(step);
        // Update the circle's position
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        // Adjust the angle
        angle2 += step * direction2;

        // Check if the circle should bounce off the line
        var lineRect = line.getBoundingClientRect();
        var circleRect = circle.getBoundingClientRect();
        var targetRect = target.getBoundingClientRect();
        var circleCenterX = circleRect.left + circleRect.width / 2;
        var circleCenterY = circleRect.top + circleRect.height / 2;

        // let dxEarly = earlyStartRect.x - circleRect.x;
        // let dyEarly = earlyStartRect.y - circleRect.y;
        // let distanceEarly = Math.sqrt(dxEarly * dxEarly + dyEarly * dyEarly);
        // let sumOfRadiiEarly = circleRect.width / 2 + earlyStartRect.width / 2;
        // let dxLate = latePressRect.x - circleRect.x;
        // let dyLate = latePressRect.y - circleRect.y;
        // let distanceLate = Math.sqrt(dxLate * dxLate + dyLate * dyLate);
        // let sumOfRadiiLate = circleRect.width / 2 + latePressRect.width / 2;

        let dxTarget = circleRect.x - targetRect.x;
        let dyTarget = circleRect.y - targetRect.y;
        let distanceTarget = Math.sqrt(dxTarget * dxTarget + dyTarget * dyTarget);
        let sumOfRadiiTarget = circleRect.width / 2 + targetRect.width / 2;

        if (

            !collided2 &&
            circleCenterY + circleRect.height / 2 >= lineRect.top &&
            circleCenterY - circleRect.height / 2 <= lineRect.bottom &&
            ((direction2 === 1 && circleCenterX + circleRect.width / 2 >= lineRect.left) ||
                (direction2 === -1 && circleCenterX - circleRect.width / 2 <= lineRect.right))
        ) {
            console.warn('OH HELL NAW')
            console.log(targetHit - targetReachedTimeStamp);
            if (targetHit){
                document.querySelector('#time').textContent = formatTime(targetHit - targetReachedTimeStamp);
                targetHit = 0;
            }
            collided2 = true; // Set collided flag to true
            setTimeout(function () {
                collided2 = false; // Reset collided flag after a delay
            }, 200);
            direction2 *= -1; // Reverse the direction2
        }

        // !targetReached &&
        // circleRect.x >= targetRect.x - 10 &&
        // circleRect.x <= targetRect.x + 10
        // Check if the circle collides with the target
        if (
            distanceTarget < sumOfRadiiTarget
        ) {
            target.style.backgroundColor = "orange";
            targetReached = true;
            targetReachedTimeStamp = performance.now();
            // console.log(dxTarget + ' ' + dyTarget + ' ' + distanceTarget + ' ' + sumOfRadiiTarget)
        } else {
            target.style.backgroundColor = "green";
            targetReached = false;
        }

        // // !targetReached && ((circleRect.x + circleRect.width / 2 >= earlyStartRect.x - 10 &&
        // //     circleRect.x + circleRect.width / 2 <= earlyStartRect.x + 10) ||
        // //     (circleRect.x + circleRect.width / 2 >= latePressRect.x - 10 &&
        // //         circleRect.x + circleRect.width / 2 <= latePressRect.x + 10))
        // if (!targetReached && distanceEarly < sumOfRadiiEarly ||
        //     (circleRect.x + circleRect.width / 2 >= latePressRect.x - 10 &&
        //     circleRect.x + circleRect.width / 2 <= latePressRect.x + 10))) {
        //     console.log(earlyStartRect.x - 10)
        //     console.log(circleRect.x + ' ' + (earlyStartRect.x - 10));
        //     console.log(circleRect.x + ' ' + (earlyStartRect.x + 10));
        //     console.log(circleRect.x + ' ' +  (latePressRect.x - 10));
        //     console.log(circleRect.x + ' ' + (latePressRect.x + 10));
        //     secondaryTargetReached = true;
        //     secondaryTargetReachedTimestamp = performance.now();
        //     console.log(secondaryTargetReached)
        // } else {
        //     // setTimeout(() => {
        //     //     secondaryTargetReached = false;
        //     // }, 2000)
        //     secondaryTargetReached = false;
        //
        // }

        for (let elementsByClassNameElement of circle.parentElement.getElementsByClassName('secondary_target')) {
            checkCollision(elementsByClassNameElement, 0);
            if (secondaryTargetReached) { break; }
        }

        // Request the next animation frame
        //requestAnimationFrame(moveSecondCircle);
    }

    function moveThirdCircle() {
        let circle = circles.item(2);
        let target = targets.item(2);
        let line = lines.item(2);
        let step = 0.01;
        // Calculate the circle's position along the radius
        var x = container.clientWidth / 2 + radius * Math.cos(angle3);
        var y = container.clientHeight / 2 + radius * Math.sin(angle3);
        // console.log(step);
        // Update the circle's position
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        // Adjust the angle
        angle3 += step * direction3;

        // Check if the circle should bounce off the line
        var lineRect = line.getBoundingClientRect();
        var circleRect = circle.getBoundingClientRect();
        var targetRect = target.getBoundingClientRect();
        var circleCenterX = circleRect.left + circleRect.width / 2;
        var circleCenterY = circleRect.top + circleRect.height / 2;

        // let dxEarly = earlyStartRect.x - circleRect.x;
        // let dyEarly = earlyStartRect.y - circleRect.y;
        // let distanceEarly = Math.sqrt(dxEarly * dxEarly + dyEarly * dyEarly);
        // let sumOfRadiiEarly = circleRect.width / 2 + earlyStartRect.width / 2;
        // let dxLate = latePressRect.x - circleRect.x;
        // let dyLate = latePressRect.y - circleRect.y;
        // let distanceLate = Math.sqrt(dxLate * dxLate + dyLate * dyLate);
        // let sumOfRadiiLate = circleRect.width / 2 + latePressRect.width / 2;

        let dxTarget = circleRect.x - targetRect.x;
        let dyTarget = circleRect.y - targetRect.y;
        let distanceTarget = Math.sqrt(dxTarget * dxTarget + dyTarget * dyTarget);
        let sumOfRadiiTarget = circleRect.width / 2 + targetRect.width / 2;

        if (

            !collided3 &&
            circleCenterY + circleRect.height / 2 >= lineRect.top &&
            circleCenterY - circleRect.height / 2 <= lineRect.bottom &&
            ((direction3 === 1 && circleCenterX + circleRect.width / 2 >= lineRect.left) ||
                (direction3 === -1 && circleCenterX - circleRect.width / 2 <= lineRect.right))
        ) {
            console.log(targetHit - targetReachedTimeStamp);
            if (targetHit){
                document.querySelector('#time').textContent = formatTime(targetHit - targetReachedTimeStamp);
                targetHit = 0;
            }
            collided3 = true; // Set collided flag to true
            setTimeout(function () {
                collided3 = false; // Reset collided flag after a delay
            }, 1000);
            direction3 *= -1; // Reverse the direction3
        }

        // !targetReached &&
        // circleRect.x >= targetRect.x - 10 &&
        // circleRect.x <= targetRect.x + 10
        // Check if the circle collides with the target
        if (
            distanceTarget < sumOfRadiiTarget
        ) {
            target.style.backgroundColor = "orange";
            targetReached = true;
            targetReachedTimeStamp = performance.now();
            // console.log(dxTarget + ' ' + dyTarget + ' ' + distanceTarget + ' ' + sumOfRadiiTarget)
        } else {
            target.style.backgroundColor = "green";
            targetReached = false;
        }

        // // !targetReached && ((circleRect.x + circleRect.width / 2 >= earlyStartRect.x - 10 &&
        // //     circleRect.x + circleRect.width / 2 <= earlyStartRect.x + 10) ||
        // //     (circleRect.x + circleRect.width / 2 >= latePressRect.x - 10 &&
        // //         circleRect.x + circleRect.width / 2 <= latePressRect.x + 10))
        // if (!targetReached && distanceEarly < sumOfRadiiEarly ||
        //     (circleRect.x + circleRect.width / 2 >= latePressRect.x - 10 &&
        //     circleRect.x + circleRect.width / 2 <= latePressRect.x + 10))) {
        //     console.log(earlyStartRect.x - 10)
        //     console.log(circleRect.x + ' ' + (earlyStartRect.x - 10));
        //     console.log(circleRect.x + ' ' + (earlyStartRect.x + 10));
        //     console.log(circleRect.x + ' ' +  (latePressRect.x - 10));
        //     console.log(circleRect.x + ' ' + (latePressRect.x + 10));
        //     secondaryTargetReached = true;
        //     secondaryTargetReachedTimestamp = performance.now();
        //     console.log(secondaryTargetReached)
        // } else {
        //     // setTimeout(() => {
        //     //     secondaryTargetReached = false;
        //     // }, 2000)
        //     secondaryTargetReached = false;
        //
        // }

        for (let elementsByClassNameElement of circle.parentElement.getElementsByClassName('secondary_target')) {
            checkCollision(elementsByClassNameElement, 0);
            if (secondaryTargetReached) { break; }
        }

        // Request the next animation frame
        //requestAnimationFrame(moveThirdCircle);
    }

    function moveCircles(){
        moveFirstCircle();
        moveSecondCircle();
        moveThirdCircle();
        requestAnimationFrame(moveCircles)
    }


    // function moveCircle(circle, target, line, step) {
    //     // Calculate the circle's position along the radius
    //     var x = container.clientWidth / 2 + radius * Math.cos(angle);
    //     var y = container.clientHeight / 2 + radius * Math.sin(angle);
    //     // console.log(step);
    //     // Update the circle's position
    //     circle.style.left = x + "px";
    //     circle.style.top = y + "px";
    //
    //     // Adjust the angle
    //     angle += step * direction;
    //
    //     // Check if the circle should bounce off the line
    //     var lineRect = line.getBoundingClientRect();
    //     var circleRect = circle.getBoundingClientRect();
    //     var targetRect = target.getBoundingClientRect();
    //     var circleCenterX = circleRect.left + circleRect.width / 2;
    //     var circleCenterY = circleRect.top + circleRect.height / 2;
    //
    //     // let dxEarly = earlyStartRect.x - circleRect.x;
    //     // let dyEarly = earlyStartRect.y - circleRect.y;
    //     // let distanceEarly = Math.sqrt(dxEarly * dxEarly + dyEarly * dyEarly);
    //     // let sumOfRadiiEarly = circleRect.width / 2 + earlyStartRect.width / 2;
    //     // let dxLate = latePressRect.x - circleRect.x;
    //     // let dyLate = latePressRect.y - circleRect.y;
    //     // let distanceLate = Math.sqrt(dxLate * dxLate + dyLate * dyLate);
    //     // let sumOfRadiiLate = circleRect.width / 2 + latePressRect.width / 2;
    //
    //     let dxTarget = circleRect.x - targetRect.x;
    //     let dyTarget = circleRect.y - targetRect.y;
    //     let distanceTarget = Math.sqrt(dxTarget * dxTarget + dyTarget * dyTarget);
    //     let sumOfRadiiTarget = circleRect.width / 2 + targetRect.width / 2;
    //
    //     if (
    //         circleRect.x > 250 &&
    //         !collided &&
    //         circleCenterY + circleRect.height / 2 >= lineRect.top &&
    //         circleCenterY - circleRect.height / 2 <= lineRect.bottom &&
    //         ((direction === 1 && circleCenterX + circleRect.width / 2 >= lineRect.left) ||
    //             (direction === -1 && circleCenterX - circleRect.width / 2 <= lineRect.right))
    //     ) {
    //         console.log(targetHit - targetReachedTimeStamp);
    //         if (targetHit){
    //             document.querySelector('#time').textContent = formatTime(targetHit - targetReachedTimeStamp);
    //             targetHit = 0;
    //         }
    //         collided = true; // Set collided flag to true
    //         setTimeout(function () {
    //             collided = false; // Reset collided flag after a delay
    //         }, 200);
    //         direction *= -1; // Reverse the direction
    //     }
    //
    //     // !targetReached &&
    //     // circleRect.x >= targetRect.x - 10 &&
    //     // circleRect.x <= targetRect.x + 10
    //     // Check if the circle collides with the target
    //     if (
    //         distanceTarget < sumOfRadiiTarget
    //     ) {
    //         target.style.backgroundColor = "orange";
    //         targetReached = true;
    //         targetReachedTimeStamp = performance.now();
    //         // console.log(dxTarget + ' ' + dyTarget + ' ' + distanceTarget + ' ' + sumOfRadiiTarget)
    //     } else {
    //         target.style.backgroundColor = "green";
    //         targetReached = false;
    //     }
    //
    //     // // !targetReached && ((circleRect.x + circleRect.width / 2 >= earlyStartRect.x - 10 &&
    //     // //     circleRect.x + circleRect.width / 2 <= earlyStartRect.x + 10) ||
    //     // //     (circleRect.x + circleRect.width / 2 >= latePressRect.x - 10 &&
    //     // //         circleRect.x + circleRect.width / 2 <= latePressRect.x + 10))
    //     // if (!targetReached && distanceEarly < sumOfRadiiEarly ||
    //     //     (circleRect.x + circleRect.width / 2 >= latePressRect.x - 10 &&
    //     //     circleRect.x + circleRect.width / 2 <= latePressRect.x + 10))) {
    //     //     console.log(earlyStartRect.x - 10)
    //     //     console.log(circleRect.x + ' ' + (earlyStartRect.x - 10));
    //     //     console.log(circleRect.x + ' ' + (earlyStartRect.x + 10));
    //     //     console.log(circleRect.x + ' ' +  (latePressRect.x - 10));
    //     //     console.log(circleRect.x + ' ' + (latePressRect.x + 10));
    //     //     secondaryTargetReached = true;
    //     //     secondaryTargetReachedTimestamp = performance.now();
    //     //     console.log(secondaryTargetReached)
    //     // } else {
    //     //     // setTimeout(() => {
    //     //     //     secondaryTargetReached = false;
    //     //     // }, 2000)
    //     //     secondaryTargetReached = false;
    //     //
    //     // }

    // for (let elementsByClassNameElement of document.getElementsByClassName('secondary_target')) {
    //     checkCollision(elementsByClassNameElement, 0);
    //     if (secondaryTargetReached) { break; }
    // }
    //
    //     // Request the next animation frame
    //     requestAnimationFrame(() => {
    //         moveCircle(circle, target, line, step);
    //     });
    // }

    document.addEventListener("keydown", handleKeyDown);

    async function handleKeyDown(event) {
        for (let elementsByClassNameElement of document.getElementsByClassName('secondary_target')) {
            checkCollision(elementsByClassNameElement, 1);
            if (secondaryTargetReached) {break;}
        }

        if (event.code === "Space" && targetReached) {
            console.log("Target reached! Space key pressed.");
            target.style.backgroundColor = "green";
            targetReached = false;

            console.log(performance.now() - targetReachedTimeStamp)
            targetHit = performance.now();
        } else if (event.code === "Space" && secondaryTargetReached && !targetReached) {
            targetHit = performance.now();

            console.log("Secondary target hit.");
            console.log(circle.getBoundingClientRect());
            console.log(document.querySelector('.secondary_target').getBoundingClientRect());
            // console.log(secondaryTargetReachedTimestamp - targetReachedTimeStamp);
            for (let elementsByClassNameElement of document.getElementsByClassName("secondary_target")) {
                if(!elementsByClassNameElement.classList.contains("hit")){
                    elementsByClassNameElement.classList.add("hit");
                }
            }
            setTimeout(() => {
                for (let elementsByClassNameElement of document.getElementsByClassName("secondary_target")) {
                    if(elementsByClassNameElement.classList.contains("hit")){
                        elementsByClassNameElement.classList.remove("hit");
                    }
                }
            }, 1000);



        } else {
            // console.log(circle.getBoundingClientRect());
            // console.log(document.querySelector('.secondary_target').getBoundingClientRect());
        }
        // if (event.code === "Space" && !targetReached && !secondaryTargetReached) {
        //     console.log(circle.getBoundingClientRect());
        //     console.log(document.querySelector('.secondary_target').getBoundingClientRect());
        // }
    }

    // Start moving the circle
    requestAnimationFrame(moveCircles)

    function checkCollision(target, consoleOut) {
        let circleRect = target.parentElement.querySelector('.circle');
        let targetRect = target.getBoundingClientRect();
        let dx = circleRect.x - targetRect.x;
        let dy = circleRect.y - targetRect.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let sumOfRadii = target.parentElement.querySelector('.circle').offsetWidth / 2 + target.offsetWidth / 2;

        // console.log(targetRect);
        // console.log(dx + ' ' + dy + ' ' + distance + ' ' + sumOfRadii)

        if (distance < sumOfRadii) {
            secondaryTargetReached = true;
            secondaryTargetReachedTimestamp = performance.now();
            // console.log(secondaryTargetReached)
        } else {
            secondaryTargetReached = false;
            // console.log(secondaryTargetReached);
        }

        if(consoleOut) {
            console.log(dx + ' ' + dy + ' ' + distance + ' ' + sumOfRadii + ' ' + secondaryTargetReached)
        }
    }

    function formatTime(time) {
        time = Math.round(time);
        let outputTime = time / 1000;
        // if (time < 10000) {
        //     outputTime = '0' + outputTime;
        // }
        while (outputTime.length < 6) {
            outputTime += '0';
        }
        return outputTime;
    }
</script>
</body>
</html>
