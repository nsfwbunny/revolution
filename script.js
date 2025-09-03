// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#6a11cb" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#6a11cb",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            }
        },
        retina_detect: true
    });

    // Animate hero elements on page load
    setTimeout(() => {
        document.getElementById('mainHeadline').style.opacity = '1';
        document.getElementById('mainHeadline').style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        document.getElementById('heroSubtitle').style.opacity = '1';
        document.getElementById('heroSubtitle').style.transform = 'translateY(0)';
    }, 800);

    setTimeout(() => {
        document.getElementById('priceTag').style.opacity = '1';
        document.getElementById('priceTag').style.transform = 'scale(1)';
    }, 1200);

    setTimeout(() => {
        document.getElementById('heroCta').style.opacity = '1';
        document.getElementById('heroCta').style.transform = 'translateY(0)';
    }, 1600);

    setTimeout(() => {
        document.getElementById('heroCounter').style.opacity = '1';
    }, 2000);

    // Animate counter
    animateValue('userCount', 0, 12347, 2000);

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Progress bar
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        document.getElementById('progressBar').style.width = scrollPercent + '%';

        // Scroll to top button
        if (scrollTop > 500) {
            document.getElementById('scrollToTop').classList.add('visible');
        } else {
            document.getElementById('scrollToTop').classList.remove('visible');
        }

        // Animate elements on scroll
        animateOnScroll();
    });

    // Scroll to top functionality
    document.getElementById('scrollToTop').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // FAQ toggle functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('faq-active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.benefit-card, .testimonial-card, .preview-content, .pricing-card, .faq-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });

        // Animate list items in preview section
        const listItems = document.querySelectorAll('.preview-list li');
        listItems.forEach((item, index) => {
            const elementPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 100);
            }
        });
    }

    // Initial check on page load
    animateOnScroll();

    // Countup animation for statistics
    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        if (!obj) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Add hover effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });

        button.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
        });
    });
});
