function setup() {
	// create a place to draw
	createCanvas(640, 480);
	stroke(255, 255, 255);
	noLoop();
}

function draw() {
	colorMode(RGB, 255);
	// clear the background
	background(53, 55, 56);

	// draw the rectangle
	for (var x = 0; x < 10; x++) {
			rect(x * 64 + 6.5, 215, 50, 50);

	// set a fill color
	colorMode(RGB);
	var y = 25;
	fill(0, 0, 0);
	rect(0 * 64 + 6.5, 215, 50, 50);
	fill(y, 0, 0);
	rect(1 * 64 + 6.5, 215, 50, 50);
	fill(2 * y, 0, 0);
	rect(2 * 64 + 6.5, 215, 50, 50);
	fill(3 * y, 0, 0);
	rect(3 * 64 + 6.5, 215, 50, 50);
	fill(4 * y, 0, 0);
	rect(4 * 64 + 6.5, 215, 50, 50);
	fill(5 * y, 0, 0);
	rect(5 * 64 + 6.5, 215, 50, 50);
	fill(6 * y, 0, 0);
	rect(6 * 64 + 6.5, 215, 50, 50);
	fill(7 * y, 0, 0);
	rect(7 * 64 + 6.5, 215, 50, 50);
	fill(8 * y, 0, 0);
	rect(8 * 64 + 6.5, 215, 50, 50);
	fill(9 * y, 0, 0);
	rect(9 * 64 + 6.5, 215, 50, 50);
	fill(10 * y, 0, 0);
	rect(10 * 64 + 6.5, 215, 50, 50);
		}
}
