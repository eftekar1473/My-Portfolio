// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Flip Card Functionality
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Remove flipped class from all cards
        flipCards.forEach(c => {
            if (c !== card) {
                c.classList.remove('flipped');
            }
        });
        // Toggle flipped class on clicked card
        card.classList.toggle('flipped');
    });
});

// Close flip card when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.flip-card')) {
        flipCards.forEach(card => {
            card.classList.remove('flipped');
        });
    }
});

// Skills Section - Category Switching
const skillBtns = document.querySelectorAll('.skill-btn');
const skillCategories = document.querySelectorAll('.skill-category');

skillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;

        // Remove active class from all buttons and categories
        skillBtns.forEach(b => b.classList.remove('active'));
        skillCategories.forEach(cat => cat.classList.remove('active'));

        // Add active class to clicked button and corresponding category
        btn.classList.add('active');
        const activeCategory = document.getElementById(`${category}-skills`);
        if (activeCategory) {
            activeCategory.classList.add('active');
        }
    });
});

// Blog Section - Show More Articles
const showMoreBtn = document.getElementById('showMoreBtn');
const blogCards = document.querySelectorAll('.blog-card');

// Initially show first 3 cards
let visibleCount = 3;

function updateBlogVisibility() {
    blogCards.forEach((card, index) => {
        if (index < visibleCount) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });

    // Hide button if all cards are visible
    if (visibleCount >= blogCards.length) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'block';
    }
}

showMoreBtn.addEventListener('click', () => {
    visibleCount += 3;
    updateBlogVisibility();
});

// Initialize blog visibility
updateBlogVisibility();

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Simulate form submission (you would replace this with actual API call)
    console.log('Form submitted:', {
        name,
        email,
        subject,
        message
    });

    // Show success message
    alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon!`);

    // Reset form
    contactForm.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all major sections
document.querySelectorAll('.projects, .skills, .blog, .contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-in-out';
    observer.observe(section);
});

// Active link highlighting in navbar
const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.borderBottom = '2px solid var(--accent)';
        } else {
            link.style.borderBottom = 'none';
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        mobileMenu.classList.remove('active');
        flipCards.forEach(card => {
            card.classList.remove('flipped');
        });
    }
});

// Add some performance monitoring
window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully!');
});
