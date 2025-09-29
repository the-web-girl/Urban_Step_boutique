// Toggle mobile menu
const burgerMenu = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');
const body = document.body;

function toggleMenu() {
    const isActive = burgerMenu.classList.contains('active');
    
    if (isActive) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    burgerMenu.classList.add('active');
    mobileNav.classList.add('active');
    mobileOverlay.classList.add('active');
    body.classList.add('menu-open');
}

function closeMenu() {
    burgerMenu.classList.remove('active');
    mobileNav.classList.remove('active');
    mobileOverlay.classList.remove('active');
    body.classList.remove('menu-open');
}

// Event listeners
burgerMenu.addEventListener('click', toggleMenu);
mobileOverlay.addEventListener('click', closeMenu);

// Close menu on mobile nav link click
mobileNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        closeMenu();
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
    }
});
