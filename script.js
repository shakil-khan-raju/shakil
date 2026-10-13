/*
  PERSONALIZE THIS FILE BEFORE PUBLISHING:
  1. Replace the placeholder email below with your professional email address.
  2. Add your real LinkedIn, GitHub, or other professional profile links if desired.
*/
const PROFILE = {
  email: "your.email@example.com"
};

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const emailLink = document.getElementById("email-link");
  const copyButton = document.getElementById("copy-email");
  const hint = document.getElementById("contact-hint");
  const isPlaceholder = !PROFILE.email || PROFILE.email === "your.email@example.com";

  if (emailLink && copyButton && hint) {
    if (!isPlaceholder) {
      emailLink.href = `mailto:${PROFILE.email}`;
      emailLink.textContent = "Email me ↗";
      hint.textContent = "For professional inquiries, please email me.";
    }

    copyButton.addEventListener("click", async () => {
      if (isPlaceholder) {
        hint.textContent = "Please replace your.email@example.com in script.js with your real email first.";
        return;
      }
      try {
        await navigator.clipboard.writeText(PROFILE.email);
        hint.textContent = "Email address copied.";
      } catch {
        hint.textContent = `Email address: ${PROFILE.email}`;
      }
    });
  }
});
