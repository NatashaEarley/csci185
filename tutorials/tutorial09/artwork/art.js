const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c33", "#e1f0c433", "#6bab9033", "#55917f33", "#5e4c5a33"];
const rainbow = ["red", "yellow", "orange", "blue", "purple", "green"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(1); // how many redraws per second
}
    strokeWeight(1);

    // generate a random x-position, y-position, and size:

        // let counter = 0;
        // while (counter < 50) {
        //     let color = colors[randomInt(0, 4)];
        //     fill(color);
        //     let x = randomInt(0, canvasWidth);
        //     let y = randomInt(0, canvasHeight);
        //     let size = randomInt(25, 125);
        //     circle(x, y, size);
        //     square(x, y, size);
        //     counter++;
        // }

    //     counter = 0;
    //     while (counter < 500) {
    //         let color = rainbow[randomInt(0, 5)];
    //         fill(color);
    //         let x = randomInt(0, canvasWidth);
    //         let y = randomInt(0, canvasHeight);
    //         let size = randomInt(5, 10);
    //         circle(x, y, size);
    //         counter++;
    //     }
    // }

    /***********************************+*
     * ANIMATION LOOP
     * Anything that you want to animate
     * goes in the draw() function
     * *********************************
     */
    function draw() {
        clear();
        let counter = 0;
        while (counter < 500) {
            let color = rainbow[randomInt(0, 5)];
            fill(color);
            let x = randomInt(0, canvasWidth);
            let y = randomInt(0, canvasHeight);
            let size = randomInt(5, 10);
            circle(x, y, size);
            counter++;
        }
    }
