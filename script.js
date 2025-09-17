document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });

    // Services Auto-Carousel (Highlighting a service card every 4 seconds)
    const serviceCards = document.querySelectorAll('.service-card');
    let activeService = 0;

    const highlightService = () => {
        // Remove active class from all cards
        serviceCards.forEach(card => card.classList.remove('active'));
        
        // Add active class to the current card
        serviceCards[activeService].classList.add('active');
        
        // Move to the next service
        activeService = (activeService + 1) % serviceCards.length;
    };

    // Highlight the first card immediately
    highlightService();
    // Set interval for auto-highlighting
    setInterval(highlightService, 4000);

    // Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");
        contactForm.reset();
    });
});