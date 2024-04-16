const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;

function showImage() {
    console.log("Show image:", idx);
    const img = document.querySelector("#the_image");
    img.src = photos[idx];
    document.getElementById("imageNumber").textContent = idx + 1;
}

function forward() {
idx = (idx + 1) % photos.length;
    showImage();
}

function back() {
idx = (idx - 1 + photos.length) % photos.length;
    showImage();
}
// ChatGPT prompts: how to write a code that  when the end of an aray is reached it goes back to the beginning of the aray in Javascript.
//How do I integrate it into this code: [Pasted my code from class]
//How to make the 1 in <p class="caption">Image 1 of 10</p> change depending on the array number in javascript




