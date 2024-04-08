function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();

    let counter = 0;
    let y = 0;
    let width = 10;
    while (counter < 70) {
        circle(300, y, width);
        circle(100, y, width);
        circle(500, y, width);
        y += 10
        width += 5
        counter += 1;
    }

    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
