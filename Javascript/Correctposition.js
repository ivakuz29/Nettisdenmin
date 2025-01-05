// Adjust scroll offset for anchor links
document.querySelectorAll('a[href^="#om"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = -100; // Adjust this value for your desired offset

        if (target) {
            window.scrollTo({
                top: target.offsetTop + offset,
                behavior: 'smooth'
            });
        }
    });
});

 