document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateClock, 1000); 
    updateClock(); 
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

document.getElementById('saveButton').addEventListener('click', function() {
    const form = document.getElementById('contact-forms');
    const formData = new FormData(form);

    let dataObject = {};
    formData.forEach((value, key) => {
        dataObject[key] = value;
    });
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML='';

    for (const [key, value] of Object.entries(dataObject)) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${value}`;
    }

    console.log(dataObject);
    document.getElementById('result').innerHTML = JSON.stringify(dataObject, null, 2)
});