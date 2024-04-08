const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 0,
    y: 100,
    width: 100,
    speed: 5,
    color: 'lightpink'
};

const c2 = {
    x: 1400,
    y: 300,
    width: 100,
    speed: -5,
    color: 'lightblue'
};

const c3 = {
    x: 0,
    y: 500,
    width: 100,
    speed: 5,
    color: 'lightgreen'
};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    if (c1.x > canvasWidth + 55) {
        c1.x = -55;
        c3.x = -55;
    }
    if (c2.x < -55) {
        c2.x = canvasWidth + 55
    }

    c1.x += c1.speed;
    c2.x += c2.speed;
    c3.x += c3.speed;
    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
