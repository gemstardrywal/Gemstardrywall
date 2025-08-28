document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});



let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;
    slideIndex = (slideIndex + n + totalSlides) % totalSlides; // Wrap around using modulus

    // Calculate the offset for sliding
    const slideWidth = slides[0].clientWidth;
    const offset = -slideIndex * slideWidth;

    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}px)`;
}

// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
