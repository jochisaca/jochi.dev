// Select all pages
const pages = document.querySelectorAll('.page');

// Function to determine if it's mobile
function checkIsMobile() {
    return window.innerWidth <= 768;
}

// Single event listener for each page
pages.forEach((page) => {
    page.addEventListener('click', (event) => {
        const isMobile = checkIsMobile();

        // Prevent specific tabs from opening on mobile
        if (isMobile && (page.id === 'page1' || page.id === 'page10' || page.id === 'page20')) {
            console.log(`Prevented ${page.id} from opening on mobile.`);
            event.preventDefault(); // Prevent default behavior
            event.stopPropagation(); // Stop event bubbling
            return; // Exit the function, preventing further action
        }

        // Prevent "no-open" tabs from opening
        if (page.classList.contains('no-open')) {
            event.stopPropagation();
            return;
        }

        // Handle page open/close toggling based on device type
        if (isMobile) {
            // Mobile animation logic
            if (page.classList.contains('open')) {
                // Close tab with smoother animation
                page.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease-out';
                page.classList.remove('open');
                page.classList.add('hidden');
            } else {
                // Close other tabs and open the selected one
                pages.forEach((p) => {
                    if (p !== page) {
                        p.classList.remove('open');
                        p.classList.add('hidden');
                    }
                });

                // Open tab with smoother animation
                page.style.transition = 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease-in';
                page.classList.add('open');
                page.classList.remove('hidden');
            }
        } else {
            // Desktop animation logic
            pages.forEach((p) => {
                if (p !== page) {
                    p.classList.remove('open');
                    p.classList.add('hidden');
                }
            });

            // Toggle open/hidden state
            page.classList.toggle('open');
            page.classList.toggle('hidden');
        }
    });
});

// Ensure pages do not open when clicking outside of any page element
document.addEventListener('click', (event) => {
    if (!event.target.closest('.page')) {
        pages.forEach((page) => {
            page.classList.remove('open');
            page.classList.add('hidden');
        });
    }
});

// Prevent click event from propagating to the tab container for links inside tabs
const links = document.querySelectorAll('.page a');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
