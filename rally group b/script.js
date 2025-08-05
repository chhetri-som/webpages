document.addEventListener('DOMContentLoaded', function() {
    // --- Existing slider code ---
    let slideIndex = 1;
    const slides = document.getElementsByClassName("slider-item");

    function showSlides(n) {
        let i;
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
            slides[i].classList.remove('active');
        }
        slides[slideIndex - 1].style.opacity = 1;
        slides[slideIndex - 1].classList.add('active');
    }

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    showSlides(slideIndex);
    // --- End of existing slider code ---

    // --- New header scroll logic ---
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
            // Scrolling down
            header.style.top = `-${headerHeight}px`;
        } else {
            // Scrolling up
            header.style.top = '0';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});
