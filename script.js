// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  menuBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  });

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
      isMenuOpen = false;
      mobileMenu.classList.add("hidden");
    });
  });

  // Smooth Scrolling for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

});

