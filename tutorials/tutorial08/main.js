function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight;
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged() {
    const color = document.querySelector("#color").value;
    const size = Number(document.querySelector("#size").value);
    const shape = document.querySelector("#shape").value;

    fill(color);
    strokeWeight(0);

    if (shape === "circle") {
        circle(mouseX, mouseY, size);
    } else if (shape === "square") {
        square(mouseX, mouseY, size);
    } else if (shape === "triangle") {
        triangle(
            mouseX, mouseY,
            mouseX - size / 2, mouseY + size,
            mouseX + size / 2, mouseY + size,
        );
    }
}
