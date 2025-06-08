document.addEventListener('DOMContentLoaded', function() {
    // Video autoplay
    const heroVideo = document.getElementById('hero-video');
    heroVideo.play().catch(e => console.log("Autoplay prevented:", e));
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile menu toggle (would need additional HTML/CSS)
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });
});