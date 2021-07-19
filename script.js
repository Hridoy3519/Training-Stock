let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let n = 0;
let array = ["images/training-image-01.jpg"];
array.push("images/training-image-02.jpg");
array.push("images/training-image-03.jpg");
array.push("images/training-image-04.jpg");

function changeImage(n, str) {
    var currentImage = document.getElementById('current-image');
    var training = document.getElementById('training-heading');
    training.innerText = str;

    currentImage.src = array[n];
}

box1.addEventListener('click', function () {
    n = 0;
    changeImage(n, "First Training Class");
})

box2.addEventListener('click', function () {
    n = 1;
    changeImage(n, "Second Training Class");
})

box3.addEventListener('click', function () {
    n = 2;
    changeImage(n, "Third Training Class");
})

box4.addEventListener('click', function () {
    n = 3;
    changeImage(n, "Fourth Training Class");
})
