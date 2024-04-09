var topPosition = 100;
var leftPosition = 100;

var intervalID = setInterval(ballMove, 30)

function ballMove() {
    var ball = document.getElementById('ball')

    ball.style.position = "absolute"
    ball.style.left = leftPosition + "px"
    ball.style.top = topPosition + "px"

    topPosition += 5
    leftPosition += 20

    if (leftPosition >= innerWidth - 100) {
        topPosition = 100
        leftPosition = 100
    }
}

