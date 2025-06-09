// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Particle.js Configuration for Blockchain Visualization
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'grab'
            },
            onclick: {
                enable: false,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Waitlist Form Handling
const waitlistForm = document.getElementById('waitlistForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

waitlistForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value;

    // Add loading state
    const submitButton = waitlistForm.querySelector('button');
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Joining...';
    submitButton.disabled = true;

    try {
        // Simulate API call (replace with actual API endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success message
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for joining our waitlist! We\'ll be in touch soon.';
        emailInput.value = '';
    } catch (error) {
        // Error message
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Oops! Something went wrong. Please try again.';
    } finally {
        // Reset button
        submitButton.innerHTML = 'Join Waitlist';
        submitButton.disabled = false;
    }
});

// Floating Animation for Cards
const cards = document.querySelectorAll('.stat-box, .feature-card, .security-feature');
cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// Add hover effect to blockchain particles
document.querySelector('.hero').addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('#particles-js canvas');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    particles.forEach(particle => {
        particle.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });
});

// Intersection Observer for Fade-in Elements
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => fadeObserver.observe(element)); 