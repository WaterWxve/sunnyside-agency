const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navButton = navLinks.querySelector('.btn--primary');

hamburger.addEventListener('click', function() {
    this.classList.toggle('hamburger-active');
    navLinks.classList.toggle('mobile-nav');
    navButton.classList.toggle('btn--mobile-nav');
})