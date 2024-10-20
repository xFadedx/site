// Array of different roles to rotate
const roles = ["Web Developer","Software Developer","Freelancer","Problem Solver"]; 

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 90;  // Speed for typing effect
const deletingSpeed = 50;  // Speed for deleting effect
const delayBetweenRoles = 1000;  // Delay before switching to the next role

function typeEffect() {
    const roleElement = document.getElementById('role');
    const currentRole = roles[roleIndex];

    if (!isDeleting && charIndex <= currentRole.length) {
        // Typing effect, only type the dynamic role
        roleElement.textContent = currentRole.substring(0, charIndex);
        charIndex++;
    }

    if (isDeleting && charIndex >= 0) {
        // Deleting effect, only delete the dynamic role
        roleElement.textContent = currentRole.substring(0, charIndex);
        charIndex--;
    }

    // When the word is fully typed, pause before starting to delete
    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, delayBetweenRoles);
    }

    // Once the word is fully deleted, move to the next role
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Cycle through roles array
    }

    const typingDelay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, typingDelay);
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// END OF TYPING EFFECT

function toggleMenu() {
    console.log("Burger menu clicked!");
    var body = document.body;
    body.classList.toggle("burger-active");
}







