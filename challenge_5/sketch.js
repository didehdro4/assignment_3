var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;

function setup() {
	createCanvas(640, 480);
}

function draw() {
	//chooses directions of the ball
	if (ballX < mouseX) ballSpeedX = 5;
	if (ballX > mouseX) ballSpeedX = -5;
	if (ballY < mouseY) ballSpeedY = 5;
	if (ballY > mouseY) ballSpeedY = -5;

	//makes ball move away from the mouse when pressed
	if (mouseIsPressed) {
		ballSpeedX = -ballSpeedX;
		ballSpeedY = -ballSpeedY;
	}
 //makes ball go to the mouse
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;

	background(0);
	ellipse(ballX, ballY, 50, 50);

}
