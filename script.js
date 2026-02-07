document.addEventListener("DOMContentLoaded", () => {
    
    // --- Image Comparison Slider Logic ---
    const comparisonContainer = document.querySelector('.comparison-container');
    const topImageWrapper = document.querySelector('.comp-img-top-wrapper');
    const topImage = document.querySelector('.comp-img-top');
    const handle = document.querySelector('.slider-handle');

    if(comparisonContainer) {
        
        // Helper to sync inner image width with container width
        const syncImageWidth = () => {
            const rect = comparisonContainer.getBoundingClientRect();
            // Force the inner image to exactly match the container width
            // This prevents the "squishing" effect when resizing the wrapper
            topImage.style.width = rect.width + "px";
        };

        const moveSlider = (e) => {
            const rect = comparisonContainer.getBoundingClientRect();
            // Calculate X position relative to container
            let x = e.clientX - rect.left;
            
            // Constrain
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;

            // Percentage
            const percentage = (x / rect.width) * 100;

            // Apply
            topImageWrapper.style.width = percentage + "%";
            handle.style.left = percentage + "%";
        };

        // Listeners
        comparisonContainer.addEventListener('mousemove', moveSlider);
        
        // Ensure image size is correct on load and resize
        window.addEventListener('resize', syncImageWidth);
        syncImageWidth(); // Run immediately
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
