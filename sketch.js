let width = 400;
let height = 400;

let walls = [];
let ray;
let particle;

function setup() {
	createCanvas(width, height);
	for (let i = 0; i < 5; i++) {
		let x1 = random(width);
		let x2 = random(width);
		let y1 = random(height);
		let y2 = random(height);
		walls.push(new Boundary(x1, y1, x2, y2));
	}

	walls.push(new Boundary(0, 0, 0, height));
	walls.push(new Boundary(0, 0, width, 0));
	walls.push(new Boundary(width, 0, width, height));
	walls.push(new Boundary(0, height, width, height));

	particle = new Particle();
}

function draw() {
	background(0);
	for (let wall of walls) {
		wall.show();
	}
	particle.update(mouseX, mouseY);
	particle.show();
	particle.look(walls);

	// let pt = ray.cast(wall);
	// if (pt) {
	// 	fill(255);
	// 	ellipse(pt.x, pt.y, 8, 8);
	// }
}
