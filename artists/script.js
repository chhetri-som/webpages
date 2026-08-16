document.addEventListener('DOMContentLoaded', () => {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Get the main content sections
    const sections = document.querySelectorAll('.content-section');
    
    // Loop through each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent the default anchor link behavior
            event.preventDefault();
            
            // Get the target section's ID from the href attribute (e.g., "#home")
            const targetId = link.getAttribute('href');
            
            // Find the target section element
            const targetSection = document.querySelector(targetId);
            
            // If the target section exists, scroll to it smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active class for navigation links
                navLinks.forEach(item => item.classList.remove('active-section'));
                link.classList.add('active-section');
            }
        });
    });

    // Add an intersection observer to update the active link as the user scrolls
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the section is visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the ID of the intersecting section
                const sectionId = entry.target.id;
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active-section'));
                
                // Add active class to the link corresponding to the current section
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active-section');
                }
            }
        });
    }, observerOptions);

    // Observe each content section
    sections.forEach(section => {
        observer.observe(section);
    });
});