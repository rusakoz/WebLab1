<!DOCTYPE html>
<html>
<head>
    <style>
        #container {
            position: relative;
            height: 400px;
            width: 400px;
            border: 1px solid black;
        }
        #circle {
            position: absolute;
            top: 200px;
            left: 200px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: red;
        }
        #line {
            position: absolute;
            top: 100px;
            left: 0;
            height: 200px;
            width: 400px;
            border-radius: 50%;
            border: 2px dashed blue;
        }
        #target {
            position: absolute;
            top: 200px;
            left: 300px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: green;
        }
    </style>
</head>
<body>
<div id="container">
    <div id="circle"></div>
    <div id="line"></div>
    <div id="target"></div>
</div>

<script>
    var container = document.getElementById("container");
    var circle = document.getElementById("circle");
    var line = document.getElementById("line");
    var target = document.getElementById("target");
    var radius = 150; // Adjust this value to change the radius
    var angle = 0;
    var direction = 1;
    var collided = false;
    var targetReached = false;

    function moveCircle() {
        // Calculate the circle's position along the radius
        var x = container.clientWidth / 2 + radius * Math.cos(angle);
        var y = container.clientHeight / 2 + radius * Math.sin(angle);

        // Update the circle's position
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        // Adjust the angle
        angle += 0.05 * direction;

        // Check if the circle should bounce off the line
        var lineRect = line.getBoundingClientRect();
        var circleRect = circle.getBoundingClientRect();
        var circleCenterX = circleRect.left + circleRect.width / 2;
        var circleCenterY = circleRect.top + circleRect.height / 2;

        if (
            !collided &&
            circleCenterY + circleRect.height / 2 >= lineRect.top &&
            circleCenterY - circleRect.height / 2 <= lineRect.bottom &&
            ((direction === 1 && circleCenterX + circleRect.width / 2 >= lineRect.left) ||
                (direction === -1 && circleCenterX - circleRect.width / 2 <= lineRect.right))
        ) {
            collided = true; // Set collided flag to true
            setTimeout(function () {
                collided = false; // Reset collided flag after a delay
            }, 200);
            direction *= -1; // Reverse the direction
        }

        // Check if the circle reaches the target
        if (
            !targetReached &&
            circleCenterX >= 300 && // Adjust the target position as needed
            circleCenterY >= 200
        ) {
            targetReached = true;
            target.style.backgroundColor = "orange";
        }

        // Request the next animation frame
        requestAnimationFrame(moveCircle);
    }

    document.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(event) {
        if (event.code === "Space") {
            var circleCenterX = circle.offsetLeft + circle.offsetWidth / 2;
            var circleCenterY = circle.offsetTop + circle.offsetHeight / 2;

            if (
                circleCenterX >= 300 && // Adjust the target position as needed
                circleCenterY >= 200
            ) {
                console.log("Circle hit the target!");
            } else if (
                circleCenterX >= line.offsetLeft &&
                circleCenterX <= line.offsetLeft + line.offsetWidth &&
                circleCenterY >= line.offsetTop &&
                circleCenterY <= line.offsetTop + line.offsetHeight
            ) {
                console.log("Circle hit the line!");
            }
        }
    }

    // Start moving the circle
    moveCircle();
</script>
</body>
</html>
