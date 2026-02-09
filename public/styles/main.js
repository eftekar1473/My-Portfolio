/* ========================================
   Data
   ======================================== */

const projectsData = [
    {
        title: "AskIIT",
        subtitle: "Ask Questions, Get Answers Quickly",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        title: "VroomGo",
        subtitle: "Rent a Car, Embark on Your Journey",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        title: "Joinify",
        subtitle: "Unify Campus Student Organizations Seamlessly",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        title: "Househive",
        subtitle: "Buy, Rent, Sell Property Easily",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        title: "TechFlow",
        subtitle: "Workflow Automation Platform",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        title: "DesignHub",
        subtitle: "Collaborative Design Tool",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        liveUrl: "#",
        codeUrl: "#"
    }
];

const activitiesData = [
    {
        title: "Bangladesh National Cadet Corps",
        excerpt: "Role : Cadet Corporal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVF2-qDmAp-AvW4ROqST7qi8aNRQnjcidVQ&s",
        href: "#"
    },
    {
        title: "NSTU Mechatronics Club",
        excerpt: "Role : Joint Secretry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWDNEvNwDs7LN_KaaT4a1aCe4LNL2yZGw-A&s",
        href: "#"
    },
    {
        title: "NSTU Debating Society",
        excerpt: "Role : Sub Executive Member",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqB1v-x-Fk33SIaJde_ZWzaMs7sKlLYSGVkA&s",
        href: "#"
    },
    {
        title: "Tech Community Lead",
        excerpt: "Organizing tech meetups and workshops",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        href: "#"
    },
    {
        title: "Volunteer Mentor",
        excerpt: "Mentoring junior developers",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        href: "#"
    },
    {
        title: "Open Source Contributor",
        excerpt: "Contributing to open source projects",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        href: "#"
    }
];

const skillsData = [
    {
        name: "Backend",
        skills: ["TypeScript", "NodeJS", "Python"]
    },
    {
        name: "Frontend",
        skills: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        name: "Database",
        skills: ["MySQL", "Firebase", "MongoDB"]
    },
    {
        name: "Mobile Apps",
        skills: ["Flutter", "Android Studio", "React Native"]
    },
    {
        name: "AI / ML",
        skills: ["Python", "TensorFlow", "OpenCV"]
    },
    {
        name: "IoT",
        skills: ["Arduino", "ESP32", "Raspberry Pi"]
    },
    {
        name: "Other",
        skills: ["Git", "Linux", "Docker"]
    }
];

/* ========================================
   Initialize
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
    initProjects();
    initBlog();
    initSkills();
    initContactForm();
    updateYear();
    initFlipCards();
});

/* ========================================
   Projects Initialization & Flip Cards
   ======================================== */
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projectsData.forEach((project, index) => {
        const card = createProjectCard(project, index);
        projectsGrid.appendChild(card);
    });
    
    addFlipCardListeners();
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="flip-card-container">
            <div class="flip-card" data-card-index="${index}">
                <div class="flip-card-front">
                    <div class="project-card-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-card-info">
                        <h4 class="project-card-title">${project.title}</h4>
                        <p class="project-card-subtitle">${project.subtitle}</p>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div style="text-align: center; color: var(--fg-secondary); font-size: 13px; margin-bottom: 12px;">
                        <p style="font-weight: 600; margin-bottom: 8px;">GitHub Repository</p>
                        <a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="flip-card-back-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                            View Code
                        </a>
                    </div>
                    <div style="text-align: center; color: var(--fg-secondary); font-size: 13px;">
                        <p style="font-weight: 600; margin-bottom: 8px;">Live Project</p>
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="flip-card-back-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" stroke-width="2"></path>
                                <polyline points="15 3 21 3 21 9" stroke="currentColor" stroke-width="2" fill="none"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="2"></line>
                            </svg>
                            View Live
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function addFlipCardListeners() {
    const cards = document.querySelectorAll('.flip-card');
    let activeCard = null;

    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            // Remove flip from previously active card
            if (activeCard && activeCard !== card) {
                activeCard.classList.remove('flipped');
            }
            // Flip the current card
            card.classList.add('flipped');
            activeCard = card;
        });
    });
}

/* ========================================
   Blog/Activities Initialization
   ======================================== */
function initBlog() {
    const blogGrid = document.getElementById('blogGrid');
    const showMoreContainer = document.getElementById('blogShowMoreContainer');
    const showMoreBtn = document.getElementById('blogShowMoreBtn');
    
    // Render first 3 cards
    activitiesData.slice(0, 3).forEach((activity) => {
        const card = createBlogCard(activity);
        blogGrid.appendChild(card);
    });

    // Show "Show More" button if there are more than 3 items
    if (activitiesData.length > 3) {
        showMoreContainer.style.display = 'flex';
        
        showMoreBtn.addEventListener('click', function() {
            // Remove hidden cards class and render remaining items
            const remainingCards = activitiesData.slice(3);
            remainingCards.forEach((activity) => {
                const card = createBlogCard(activity);
                blogGrid.appendChild(card);
            });
            
            // Hide the button after revealing all
            showMoreContainer.style.display = 'none';
        });
    }
}

function createBlogCard(activity) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.innerHTML = `
        <div class="blog-card-image">
            <img src="${activity.image}" alt="${activity.title}">
        </div>
        <div class="blog-card-content">
            <div>
                <h3 class="blog-card-title">${activity.title}</h3>
                <p class="blog-card-excerpt">${activity.excerpt}</p>
            </div>
            <a href="${activity.href}" class="blog-card-link">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </a>
        </div>
    `;
    return article;
}

/* ========================================
   Skills Initialization
   ======================================== */
let currentActiveCategory = 0;

function initSkills() {
    const skillsCategories = document.getElementById('skillsCategories');
    
    // Create category buttons
    skillsData.forEach((category, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `skill-category-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = category.name;
        btn.addEventListener('click', () => {
            selectSkillCategory(index);
        });
        skillsCategories.appendChild(btn);
    });
    
    // Display first category by default
    displaySkills(0);
}

function selectSkillCategory(index) {
    // Update active button
    const buttons = document.querySelectorAll('.skill-category-btn');
    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    
    currentActiveCategory = index;
    displaySkills(index);
}

function displaySkills(index) {
    const category = skillsData[index];
    const skillsList = document.getElementById('skillsList');
    const categoryTitle = document.getElementById('activeSkillCategory');
    
    // Update title
    categoryTitle.textContent = category.name;
    
    // Clear and populate skills
    skillsList.innerHTML = '';
    category.skills.forEach((skill) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-icon">${skill.charAt(0)}</div>
            ${skill}
        `;
        skillsList.appendChild(skillItem);
    });
}

/* ========================================
   Contact Form
   ======================================== */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        console.log('Form submitted:', { name, email, message });
        
        // Show success message (you can customize this)
        alert('Thank you for reaching out! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

/* ========================================
   Utilities
   ======================================== */
function updateYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

/* ========================================
   Scroll Animations (Optional)
   ======================================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fade-in-up 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.animation = `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`;
        });
    }, 100);
});
