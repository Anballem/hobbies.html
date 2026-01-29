// JavaScript for mobile menu dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Toggle the dropdown visibility
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('dropdown-open');
            
            // Toggle the button icon between hamburger and close
            if (mobileMenu.classList.contains('hidden')) {
                menuBtn.textContent = '☰';
            } else {
                menuBtn.textContent = '✕';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('dropdown-open');
                menuBtn.textContent = '☰';
            }
        });
        
        // Close menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('dropdown-open');
                menuBtn.textContent = '☰';
            });
        });
    }
});

