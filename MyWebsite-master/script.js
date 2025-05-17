// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }
    
    // Publication list toggle functionality
    const viewMoreBtn = document.querySelector('.view-more a');
    const fullPublicationsList = document.querySelector('.full-publications-list');
    
    if (viewMoreBtn && fullPublicationsList) {
        viewMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (fullPublicationsList.style.display === 'none' || fullPublicationsList.style.display === '') {
                fullPublicationsList.style.display = 'block';
                this.textContent = 'Hide Full Publication List';
            } else {
                fullPublicationsList.style.display = 'none';
                this.textContent = 'View Full Publication List';
            }
        });
    }
    
    // Publication filtering functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const publications = document.querySelectorAll('.publication');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Show/hide publications based on filter
                publications.forEach(pub => {
                    if (filter === 'all') {
                        // For 'all' filter, respect the visibility of full publications list
                        if (pub.parentElement.classList.contains('full-publications-list') && 
                            fullPublicationsList.style.display === 'none') {
                            pub.style.display = 'none';
                        } else {
                            pub.style.display = 'block';
                        }
                    } else {
                        // For year filters, show publications from that year regardless of which list they're in
                        if (pub.getAttribute('data-year') === filter) {
                            pub.style.display = 'block';
                            // If the publication is in the full list, make sure it's visible
                            if (pub.parentElement.classList.contains('full-publications-list')) {
                                fullPublicationsList.style.display = 'block';
                                if (viewMoreBtn) viewMoreBtn.textContent = 'Hide Full Publication List';
                            }
                        } else {
                            pub.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Dark mode toggle functionality
    const modeToggle = document.querySelector('.mode-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (modeToggle) {
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    if (modeToggle) {
        modeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Update icon based on current mode
            if (body.classList.contains('dark-mode')) {
                this.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                this.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Add active class to navigation items when scrolling
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navItems = document.querySelectorAll('nav li a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Update copyright year
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    footerYear.textContent = footerYear.textContent.replace('2023', currentYear);
});