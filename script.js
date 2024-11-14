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

// Start the typing effect
document.addEventListener("DOMContentLoaded", typeText);
