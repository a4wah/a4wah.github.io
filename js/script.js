     const hamburger = document.getElementById('hamburger');
                        const navLinks = document.getElementById('nav-links');
                    
                        // Toggle menu
                        hamburger.addEventListener('click', (e) => {
                            e.stopPropagation();
                            navLinks.classList.toggle('active');
                        });
                    
                        // Tutup jika klik di luar
                        document.addEventListener('click', (e) => {
                            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                                navLinks.classList.remove('active');
                            }
                        });
                        // Smooth scrolling for navigation links
                        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                            anchor.addEventListener('click', function (e) {
                                e.preventDefault();
                                document.querySelector(this.getAttribute('href')).scrollIntoView({
                                    behavior: 'smooth'
                                });
                            });
                        });
                
                        // Form submission
                        document.querySelector('.contact-form').addEventListener('submit', function(e) {
                            e.preventDefault();
                            alert('Thank you for your message! I will get back to you soon.');
                            this.reset();
                        });
                
                        // Add scroll effect to navigation
                        window.addEventListener('scroll', function() {
                            const nav = document.querySelector('nav');
                            if (window.scrollY > 100) {
                                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                            } else {
                                nav.style.background = '#fff';
                            }
                        });