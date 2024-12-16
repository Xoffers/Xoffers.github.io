document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    const comeInButton = document.getElementById("come-in-btn");

    comeInButton.addEventListener("click", () => {
        welcomeScreen.classList.add("hidden");
        const controlPanel = document.querySelector(".control-panel");
        if (controlPanel) {
            controlPanel.scrollIntoView({ behavior: "smooth" });
        }
    });
});

const temperatureSlider = document.getElementById('temperature-slider');
const temperatureValue = document.getElementById('temperature-value');
temperatureSlider.addEventListener('input', () => {
    temperatureValue.textContent = temperatureSlider.value;
});

const airQualityStatus = document.getElementById('air-quality-status');
document.getElementById('air-quality-check').addEventListener('click', () => {
    airQualityStatus.textContent = 'Status: Excellent'; 
});

const lightSlider = document.getElementById('light-slider');
const lightValue = document.getElementById('light-value');
lightSlider.addEventListener('input', () => {
    lightValue.textContent = `${lightSlider.value}%`;
});

const blindsStatus = document.getElementById('blinds-status');
document.getElementById('blinds-open').addEventListener('click', () => {
    blindsStatus.textContent = 'Open';
});
document.getElementById('blinds-close').addEventListener('click', () => {
    blindsStatus.textContent = 'Closed';
});

document.getElementById('fridge-status').addEventListener('click', () => {
    document.getElementById('fridge-info').textContent = 'Normal Operation';
});
document.getElementById('oven-control').addEventListener('click', () => {
    document.getElementById('oven-info').textContent = 'Preheating...';
});
document.getElementById('washing-machine').addEventListener('click', () => {
    document.getElementById('washing-info').textContent = 'Running Cycle';
});

const currentTrack = document.getElementById('current-track');
document.getElementById('play-music').addEventListener('click', () => {
    currentTrack.textContent = 'Song A'; 
});
document.getElementById('pause-music').addEventListener('click', () => {
    currentTrack.textContent = 'Paused';
});
document.getElementById('next-track').addEventListener('click', () => {
    currentTrack.textContent = 'Song B';
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contacts form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Contact Form");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'Vladislav' && password === '12345') {
            welcomeScreen.classList.add('hidden'); 
        } else {
            alert('Incorrect username or password!');
        }
    });
});

