     // Animasi saat scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.about-card, .skill-category, .portfolio-item');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementPosition < windowHeight - 100) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial state
            const aboutCards = document.querySelectorAll('.about-card');
            const skillCategories = document.querySelectorAll('.skill-category');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            aboutCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
            });
            
            skillCategories.forEach(skill => {
                skill.style.opacity = '0';
                skill.style.transform = 'translateY(30px)';
                skill.style.transition = 'all 0.6s ease';
            });
            
            portfolioItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'all 0.6s ease';
            });
            
            // Trigger on load
            animateOnScroll();
            
            // Listen for scroll events
            window.addEventListener('scroll', animateOnScroll);
        });
