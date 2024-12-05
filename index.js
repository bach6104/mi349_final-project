// Left Dropdown Button (menu-toggle)
const leftMenuToggle = document.getElementById('left-menu-toggle');
const leftMenu = document.getElementById('left-menu');

// Toggle the left menu visibility
leftMenuToggle?.addEventListener('click', () => {
    leftMenu.classList.toggle('active');
});

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
    if (leftMenu && leftMenuToggle && !leftMenu.contains(event.target) && !leftMenuToggle.contains(event.target)) {
        leftMenu.classList.remove('active');
    }
});

// Handle scroll event for sticky navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Toggle "Read More" and "Read Less" buttons
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const isExpanded = button.textContent === 'Read Less';
        button.textContent = isExpanded ? 'Read More' : 'Read Less';
    });
});
