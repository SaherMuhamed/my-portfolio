// glitch effect
// document.getElementById('cv-request').addEventListener('mouseenter', function() {
//     const originalText = this.textContent;
//     const glitchChars = "!@#$%^&*()_+{}|:<>?~`";
    
//     let counter = 0;
//     const glitchInterval = setInterval(() => {
//         if (counter >= 10) {
//             this.textContent = originalText;
//             clearInterval(glitchInterval);
//             return;
//         }
        
//         let glitchedText = '';
//         for (let i = 0; i < originalText.length; i++) {
//             if (Math.random() > 0.7) {
//                 glitchedText += glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
//             } else {
//                 glitchedText += originalText.charAt(i);
//             }
//         }
//         this.textContent = glitchedText;
//         counter++;
//     }, 50);
// });

// Mobile menu functionality
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

// Dropdown functionality for mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && !e.target.closest('.navbar')) {
        document.getElementById('nav-links').classList.remove('active');
    }
});

// Matrix rain effect
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

const alphabet = katakana + latin + nums + symbols;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

// Typing effect
const typingText = document.getElementById('typing-text');
const texts = [
    "Cyber Security Specialist",
    "Penetration Tester",
    "Ethical Hacker",
    "Python Developer",
    "Security Researcher"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of text
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before typing next text
    }

    setTimeout(type, typingSpeed);
}

// Start typing effect after a delay
setTimeout(type, 1000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just log it and show an alert
    console.log({name, email, subject, message});
    
    alert('Message sent! (This is a demo - in a real site this would send to a server)');
    contactForm.reset();
});

// Set current date in footer
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);

// Responsive adjustments
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
