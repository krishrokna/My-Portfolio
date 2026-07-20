// ================================
// Portfolio JavaScript
// ================================

// Navbar active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// Typing Effect
// ================================

const text = [
    "Computer Science Student",
    "C++ Programmer",
    "Python Learner",
    "DSA Enthusiast"
];

let index = 0;
let charIndex = 0;

const heading = document.querySelector(".left h2");

function typeEffect() {

    if (charIndex < text[index].length) {

        heading.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        heading.textContent = text[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        index++;

        if (index >= text.length) {
            index = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

window.onload = () => {

    heading.textContent = "";

    typeEffect();

};

// ================================
// Scroll Animation
// ================================

const cards = document.querySelectorAll(".card,.project,.edu,.certificate-list li");

function reveal() {

    cards.forEach(card => {

        const windowHeight = window.innerHeight;

        const revealTop = card.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.7s";

});

window.addEventListener("scroll", reveal);

reveal();

// ================================
// Back to Top Button
// ================================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#00d9ff";
topButton.style.color = "#000";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 0 10px #00d9ff";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// ================================
// Greeting Message
// ================================

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {

    greeting = "Good Morning! ☀️";

} else if (hour < 17) {

    greeting = "Good Afternoon! 🌤️";

} else {

    greeting = "Good Evening! 🌙";

}

console.log(greeting);

// ================================
// Skill Card Hover Effect
// ================================

const skillCards = document.querySelectorAll(".card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});