document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HERO SLIDER LOGIC ---
    const images = [
        'render0.jpg', 
        'render1.jpg', 
        'render2.jpg', 
        'render3.jpg', 
        'render4.jpg', 
        'render5.jpg'
    ];
    
    let currentIndex = 0;
    const heroImg = document.getElementById('hero-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function updateHeroImage(index) {
        // Fade out
        heroImg.style.opacity = '0';
        heroImg.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            heroImg.src = images[index];
            // Fade in
            heroImg.style.opacity = '1';
            heroImg.style.transform = 'scale(1)';
        }, 300); // Matches CSS transition time
    }

    if(prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) currentIndex = images.length - 1;
            updateHeroImage(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= images.length) currentIndex = 0;
            updateHeroImage(currentIndex);
        });
    }

    // --- 2. LIGHTBOX (ZOOM) LOGIC ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-lightbox');
    
    // Select all images inside portfolio cards
    const gridImages = document.querySelectorAll('.portfolio-card img');

    gridImages.forEach(img => {
        img.addEventListener('click', (e) => {
            // Set the lightbox image source to the clicked image
            lightboxImg.src = e.target.src;
            // Show the lightbox
            lightbox.classList.add('active');
        });
    });

    // Close lightbox when clicking X
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Close lightbox when clicking outside the image (the dark background)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});
