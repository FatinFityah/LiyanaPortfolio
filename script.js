// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add subtle parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    container.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
});

// Reset transform on mouse leave
document.body.addEventListener('mouseleave', () => {
    const container = document.querySelector('.container');
    container.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
});
