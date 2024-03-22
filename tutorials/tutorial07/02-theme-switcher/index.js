// function defaultTheme() {
//     const bodyEl = document.querySelector("body")
//     bodyEl.className = "";
// }

// function oceanTheme() {
//     const bodyEl = document.querySelector("body")
//     bodyEl.className = "ocean";
// }

// function desertTheme() {
//     const bodyEl = document.querySelector("body")
//     bodyEl.className = "desert";
// }

// function highContrastTheme() {
//     const bodyEl = document.querySelector("body")
//     bodyEl.className = "high-contrast";
// }
const bodyEl = document.querySelector("body");

function changeTheme(myClass) {
    bodyEl.className = myClass;
}
/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/