var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;
var ballA = 100;
var ballB = 200;
var ballSpeedA = 4;
var ballSpeedB = 4;

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	// noLoop();
}

function draw() {
	// clear the background
	background(0, 0, 0);

	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;
	ballA = ballA + ballSpeedA;
	ballB = ballB + ballSpeedB;

	// right
	if (ballX > 640) {
		ballSpeedX = -ballSpeedX;
	}
	if (ballA > 640) {
		ballSpeedA = -ballSpeedA;
	}
	//bottom
	if (ballY > 480) {
		ballSpeedY = -ballSpeedY;
	}
	if (ballB > 480) {
		ballSpeedB = -ballSpeedB;
	}
	// left
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}
	if (ballA < 0) {
		ballSpeedA = -ballSpeedA;
	}
	// top
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}
	if (ballB < 0) {
		ballSpeedB = -ballSpeedB;
	}

	// set a fill color
	fill(255, 255, 255);

	// draw the ellipse
	ellipse(ballX, ballY, 50, 50);
	ellipse(ballA, ballB, 50, 50);

}
