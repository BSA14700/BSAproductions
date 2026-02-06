// Create the lightbox elements dynamically
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.style.display = 'flex';
        const img = document.createElement('img');
        img.src = image.src;
        // Clear old image before adding new one
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.style.display = 'none';
});