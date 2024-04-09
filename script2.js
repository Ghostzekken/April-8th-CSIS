var topPosition = 100;
var leftPosition = 100;

var intervalID = setInterval(ballMove, 100);
var ball = document.getElementById("ball");
ball.style.position = "absolute"

document.getElementById('Slider').addEventListener('input', slideChange)


function ballMove() {
    var ball = document.getElementById('ball')

    ball.style.position = "absolute"
    ball.style.left = leftPosition + "px"
    ball.style.top = topPosition + "px"

    topPosition += 5;
    leftPosition += 20;

    if (leftPosition >= window.innerWidth - 100) {
        topPosition = 100
        leftPosition = 100
    }
}

function slideChange() {
    speed = document.getElementById("Slider").value;

    clearInterval(intervalID);
    intervalID = setInterval(ballMove, speed)
}

