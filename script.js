/* =============================================
   MAIN NAVIGATION & MOBILE MENU CONTROLLER
   ============================================= */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const body = document.body;

  // Ensure elements exist in DOM before attaching listeners
  if (hamburger && mobileMenu) {
    function toggleMenu() {
      const isOpen = hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      body.classList.toggle("menu-open");

      // Accessibility states
      hamburger.setAttribute("aria-expanded", isOpen);
      mobileMenu.setAttribute("aria-hidden", !isOpen);
    }

    // Toggle menu on button click
    hamburger.addEventListener("click", toggleMenu);

    // Close menu when clicking any mobile navigation link
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileMenu.classList.contains("active")) {
          toggleMenu();
        }
      });
    });

    // Close mobile menu when pressing the Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  }
});
