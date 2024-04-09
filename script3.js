var topPosition = 100;
var leftPosition = 100;

var intervalID = setInterval(ballMove, 100);
var ball = document.getElementById("ball");
ball.style.position = "absolute";

document.getElementById('Slider').addEventListener('input', slideChange);

ball.addEventListener('click', explode)


function ballMove() {
    var ball = document.getElementById('ball')

    ball.style.position = "absolute"
    ball.style.left = leftPosition + "px"
    ball.style.top = topPosition + "px"

    topPosition = Math.random() * window.innerHeight - 200;
    leftPosition = Math.random() * window.innerWidth - 200;

    if (leftPosition >= innerWidth - 100) {
        topPosition = 100
        leftPosition = 100
    }
}

function slideChange() {
    speed = document.getElementById('Slider').value

    clearInterval(intervalID)
    intervalID = setInterval(ballMove, speed)
}

function explode(){
    document.getElementById('ball').src="explosion.webp"
    clearInterval(intervalID)
}