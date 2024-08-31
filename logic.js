document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    // Show image in lightbox
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showLightbox(img.src);
        });
    });

    // Display lightbox
    function showLightbox(src) {
        lightbox.style.display = 'flex';
        lightboxImage.src = src;
    }

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Navigate to previous image
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        lightboxImage.src = galleryItems[currentIndex].src;
    });

    // Navigate to next image
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        lightboxImage.src = galleryItems[currentIndex].src;
    });

    // Close lightbox on clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
