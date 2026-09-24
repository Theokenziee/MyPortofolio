const titles = ["Student", "Front-End Developer", "Web Developer", "UI / UX Designer", "Programmer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenWords = 2000;

function typeText() {
    const textElement = document.getElementById("animated-text");

    if (isDeleting) {
        // Remove characters
        textElement.textContent = titles[index].substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % titles.length;
        }
    } else {
        // Add characters
        textElement.textContent = titles[index].substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === titles[index].length) {
            isDeleting = true;
            setTimeout(typeText, pauseBetweenWords);
            return;
        }
    }
    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

// Highlight the nav link of the section currently in view
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

function setActiveLink() {
    // Trigger a bit before a section reaches the top, to account for the fixed header
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let currentId = sections.length ? sections[0].id : "home";

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
            currentId = section.id;
        }
    });

    // If the user hit the bottom of the page, highlight the last section
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        currentId = sections[sections.length - 1].id;
    }

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
    });
}

window.addEventListener("scroll", setActiveLink);
document.addEventListener("DOMContentLoaded", setActiveLink);

// Start the typing effect
document.addEventListener("DOMContentLoaded", typeText);
