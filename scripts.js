let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const threshold = 100; // Adjust this value based on your preference

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show or hide the navbar based on scroll direction
    if (scrollTop > lastScrollTop) {
        // Downscroll
        navbar.classList.add('hidden');
    } else {
        // Upscroll
        navbar.classList.remove('hidden');
    }

    // Change navbar color when scrolling past threshold
    if (scrollTop > threshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

