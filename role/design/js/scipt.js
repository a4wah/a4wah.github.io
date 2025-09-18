    // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        themeToggle.addEventListener('click', () => {
            document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
            
            if (document.body.dataset.theme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                text.textContent = 'Mode Terang';
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                text.textContent = 'Mode Gelap';
            }
        });
        
        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                navLinks.classList.remove('active');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });