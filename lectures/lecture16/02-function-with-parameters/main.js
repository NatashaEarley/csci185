// make a function:

// function makeRed(){
//     document.querySelector("body").style.backgroundColor = "#B22";
// }


// function makeBlue(){
//     document.querySelector("body").style.backgroundColor = "#2AF";
// }


// function makeGreen(){
//     document.querySelector("body").style.backgroundColor = "#2F1";
// }

function changeColor(color) {
    const bodyEl = document.querySelector("body");
    bodyEl.style.backgroundColor = color;
}