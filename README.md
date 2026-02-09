# Eftekhar's Portfolio - Vanilla HTML/CSS/JavaScript

A modern, fully responsive portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, just pure web technologies.

## Features

- **Responsive Design** - Mobile-first approach, works perfectly on all devices
- **Interactive Projects** - 3D flip cards with smooth animations
- **Dynamic Skills Section** - Category-based skill showcase with visual design
- **Blog/Activities** - Show more functionality to display articles
- **Contact Form** - Functional contact form with validation
- **Mobile Menu** - Hamburger menu for mobile navigation
- **Smooth Scrolling** - Smooth navigation between sections
- **Dark Theme** - Professional dark color scheme
- **Fast & Lightweight** - No dependencies, minimal CSS/JS

## Project Structure

```
.
├── index.html              # Main HTML file (413 lines)
├── css/
│   └── styles.css         # Complete styling (747 lines)
├── js/
│   └── script.js          # All JavaScript functionality (214 lines)
├── assets/
│   ├── profile.jpg        # Profile image placeholder
│   └── resume.pdf         # Resume file
└── README.md              # Documentation
```

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in any modern web browser. No build process needed!

```bash
open index.html
# or just double-click the file
```

### Option 2: Local Development Server
For better development experience with proper file loading:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000

# Using npm script
npm run serve
```

Then visit `http://localhost:8000` in your browser.

## Customization Guide

### Update Personal Information
Edit `index.html` to customize:
- **Name & Title** - Change the hero section text
- **Profile Image** - Replace `assets/profile.jpg`
- **Projects** - Edit the flip cards with your work
- **Skills** - Modify skill lists for each category
- **Blog Articles** - Add your own blog posts
- **Contact Info** - Update email, phone, location, social links
- **Resume** - Add your actual resume.pdf to `assets/`

### Change Color Scheme
Edit the CSS variables at the top of `css/styles.css`:

```css
:root {
    --primary: #3b82f6;        /* Main brand color */
    --primary-dark: #1e40af;   /* Darker primary */
    --accent: #8b5cf6;         /* Accent color */
    --background: #0f172a;     /* Dark background */
    --surface: #1a2332;        /* Card backgrounds */
    --text: #e2e8f0;           /* Primary text */
    --text-secondary: #94a3b8; /* Secondary text */
    --border: #334155;         /* Border color */
}
```

### Modify Typography
Change fonts in `index.html` head and `css/styles.css`:
- Primary font: `Space Grotesk` (headings)
- Secondary font: `Inter` (body text)

## Features Explained

### 3D Flip Cards (Projects Section)
- Click any project card to flip it 180 degrees
- See GitHub and Live Demo links on the back
- Only one card flips at a time (others auto-close)
- Click outside card or on another card to close
- Smooth 3D transformation animation

### Dynamic Skills Section
- Click different skill category buttons
- Content smoothly transitions with fade-in animation
- Categories: Frontend, Backend, Database, Tools, Other
- Visual centered developer icon
- 7 skills per category displayed in 2-column grid

### Blog Show More
- Initially displays first 3 articles
- "Show More Articles" button reveals 3 more at a time
- Button auto-hides when all articles are visible
- Hover effect on cards with elevation

### Contact Form
Features include:
- Name, email, subject, message fields
- Client-side validation
- Email format verification
- Required field checking
- Success message after submission
- Auto-reset form on submit

### Mobile Navigation
- Responsive hamburger menu for screens < 768px
- Smooth transition and overlay
- Auto-closes when clicking links
- Close with Escape key

## Browser Compatibility

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome | ✅ Full | ✅ Full |
| Firefox | ✅ Full | ✅ Full |
| Safari | ✅ Full | ✅ Full |
| Edge | ✅ Full | ✅ Full |

## Performance Metrics

- **Zero Dependencies** - No npm packages required
- **CSS Size** - ~35KB (unminified, ~12KB gzipped)
- **JS Size** - ~8KB (unminified, ~3KB gzipped)
- **Load Time** - < 1 second on average connections
- **Page Speed** - Optimized for lighthouse scores
- **Accessibility** - Semantic HTML5, ARIA labels, keyboard navigation

## Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Connect GitHub repository
2. Set build command: (leave empty)
3. Set publish directory: `.` (root)
4. Deploy

### GitHub Pages
```bash
# Push to gh-pages branch
git branch gh-pages
git push origin gh-pages
```

### Any Static Host
Just upload the project files to any static hosting service (AWS S3, Azure Static Web Apps, etc.)

## Customization Tips

1. **Add More Projects**
   - Copy entire `.flip-card` div block
   - Update title, description, tech tags, and links

2. **Add Blog Articles**
   - Copy `.blog-card` div
   - Update date, title, description

3. **Add Skills**
   - Add `<li>` items to the respective skill category list
   - Grid automatically adjusts to 2 columns

4. **Change Animations**
   - Modify `--transition` variable in CSS
   - Add custom `@keyframes` animations
   - Adjust `transform` and `transition` properties

5. **Add Sections**
   - Follow existing HTML structure
   - Create corresponding CSS class
   - Add JavaScript if interaction needed

## File Descriptions

### index.html (413 lines)
Complete semantic HTML5 structure with:
- Navigation bar with mobile menu
- Hero section with CTA buttons
- Projects with 3D flip cards
- Interactive skills section
- Blog/activities listing
- Contact form
- Footer with links

### css/styles.css (747 lines)
Comprehensive styling including:
- Root CSS variables for theming
- Typography system
- Layout styles (flexbox, grid)
- Component styles (cards, buttons, forms)
- Responsive breakpoints
- Animations and transitions
- Dark theme optimized

### js/script.js (214 lines)
All interactive functionality:
- Mobile menu toggle
- Flip card interactions
- Skills category switching
- Blog show-more functionality
- Contact form validation
- Smooth scrolling
- Active link highlighting
- Keyboard shortcuts (Escape to close)
- Intersection Observer for fade-in effects

## Keyboard Shortcuts

- `Escape` - Close mobile menu and flip cards
- `Click link` - Smooth scroll to section
- `Tab` - Navigate through interactive elements

## Advanced Customization

### API Integration
To send form emails, update the JavaScript:

```javascript
// In js/script.js, replace the form submission handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Send to your API endpoint
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    
    // Handle response
});
```

### Dark/Light Mode Toggle
Add theme switching by modifying CSS and JS for localStorage theme preference.

## Support & Issues

Need help? Check:
1. Browser console for errors (F12)
2. Ensure all file paths are correct
3. Make sure you're using a modern browser (ES6+)
4. Check that images exist in `assets/` folder

## License

Feel free to use this portfolio template. Customize it for your needs!

---

Built with pure HTML, CSS, and JavaScript - No frameworks, no dependencies, blazingly fast! 🚀
