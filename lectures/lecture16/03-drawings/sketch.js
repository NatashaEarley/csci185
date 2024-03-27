function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("teal")
    circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(30, 20, 55, 55);

    // add your drawing here:
    https://p5js.org/reference/#/p5/point
    strokeWeight(5)
    point(110, 20);

    // https://p5js.org/reference/#/p5/text
    fill("black")
    text("Here is some text", 200, 40);

    https://p5js.org/reference/#/p5/ellipse
    fill('red');
    ellipse(100, 200, 60, 100);

    fill("blue");
    rect(200,300,200,200);
    triangle(300,200,200,300,400,300)
    rect(250,400,100,100)
    rect(225,325,50,50)
    rect(325,325,50,50)
    line(350,325,350,375)
    line(250,325,250,375)
    line(225,350,275,350)
    line(325,350,375,350)
    strokeWeight(12)
    point(320,450)



    // Other shapes...
    Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}