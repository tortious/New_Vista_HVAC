document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('#nav-links ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});