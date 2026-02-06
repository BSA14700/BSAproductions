// List of your uploaded images
const images = [
    'render0.jpg',
    'render1.jpg',
    'render2.jpg',
    'render3.jpg',
    'render4.jpg',
    'render5.jpg'
];

let currentIndex = 2; // Start with render3 (the blue one looks good as Hero)
const heroImg = document.getElementById('hero-img');

function changeSlide(direction) {
    // Calculate new index
    currentIndex += direction;

    // Loop back to start if at end, or go to end if at start
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // Update the image source
    heroImg.src = images[currentIndex];
}
