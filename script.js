document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Define your images (Make sure filenames match exactly!)
    const images = [
        'render0.jpg', 
        'render1.jpg',
        'render2.jpg',
        'render3.jpg',
        'render4.jpg',
        'render5.jpg'
    ];

    let currentIndex = 0; // Start at the first image (render0)
    const heroImg = document.getElementById('hero-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // 2. The Function to Change Images
    function updateImage(index) {
        // Add a fade effect (optional polish)
        heroImg.style.opacity = '0'; 
        
        setTimeout(() => {
            heroImg.src = images[index];
            heroImg.style.opacity = '1';
        }, 200);
    }

    // 3. Button Click Events
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1; // Loop to end
        }
        updateImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; // Loop to start
        }
        updateImage(currentIndex);
    });
});
