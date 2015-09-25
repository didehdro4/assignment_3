function setup() {
	// create a place to draw
	createCanvas(640, 480);
	strokeWeight(1);
	noLoop();
}

function draw() {
	// clear the background
	background(124, 124, 158);

	// set a fill color
	noFill();

	// draw the ellipse
	var outsideTarget = 20;
	for(var i = 0; i < 50; i++){
		stroke(0, 0, 0);
	ellipse(320, 240, i * outsideTarget, i * outsideTarget);
}
	var insideTarget = 40;
	for(var j = 0; j < 50; j++){
		stroke(255, 255, 255);
	ellipse(320, 240, j * insideTarget, j * insideTarget);
}
}
