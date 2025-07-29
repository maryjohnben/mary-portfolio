// Navigation highlighting and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Set initial active state
    function setActiveNav() {
        const scrollPos = window.scrollY + 150; // Offset for header height
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
        
        // If no section is active and we're at the top, highlight the first link
        if (!currentSection && scrollPos < 200) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[0].classList.add('active');
        }
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        setActiveNav();
    });
    
    // Initial call to set active state
    setActiveNav();
    
    // Set initial active state after a short delay
    setTimeout(setActiveNav, 500);
    
    // Debug: Log to console to verify script is running
    console.log('Navigation script loaded');
    console.log('Found nav links:', navLinks.length);
    console.log('Found sections:', sections.length);
    
    // Test click functionality
    navLinks.forEach((link, index) => {
        console.log(`Link ${index + 1}:`, link.textContent, '->', link.getAttribute('href'));
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in effect for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}); 