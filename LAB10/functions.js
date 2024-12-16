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

const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');
const resultDiv = document.getElementById('result');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\+370[0-9]{8}$/; 
    return phoneRegex.test(phone);
}

function validateAddress(address) {
    return address.trim().length > 0;
}

submitButton.addEventListener('click', () => {
    const dataObject = {
        Name: document.getElementById('name').value,
        Surname: document.getElementById('surname').value,
        Email: document.getElementById('email').value,
        Phone: document.getElementById('phone').value,
        Address: document.getElementById('address').value,
        Question1: parseInt(document.getElementById('question1').value),
        Question2: parseInt(document.getElementById('question2').value),
        Question3: parseInt(document.getElementById('question3').value),
        Question4: parseInt(document.getElementById('question4').value),
        Question5: parseInt(document.getElementById('question5').value)
    };

    let validationErrors = [];

    if (!validateEmail(dataObject.Email)) {
        validationErrors.push('Invalid email address.');
    }

    if (!validatePhone(dataObject.Phone)) {
        validationErrors.push('Invalid phone number.');
    }

    if (!validateAddress(dataObject.Address)) {
        validationErrors.push('Address cannot be empty.');
    }

    if (validationErrors.length > 0) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<p class="error">${validationErrors.join('<br>')}</p>`;
        return;
    }

    console.log(dataObject);

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '';

    Object.entries(dataObject).forEach(([key, value]) => {
        resultDiv.innerHTML += `<p>${key}: ${value}</p>`;
    });

    const contactDetails = `Contact Info: Email - ${dataObject.Email}, Phone - ${dataObject.Phone}, Address - ${dataObject.Address}`;
    resultDiv.innerHTML += `<p>${contactDetails}</p>`;

    const averageScore = (
        dataObject.Question1 +
        dataObject.Question2 +
        dataObject.Question3 +
        dataObject.Question4 +
        dataObject.Question5
    ) / 5;

    let averageMessage;
    if (averageScore >= 0 && averageScore <= 4) {
        averageMessage = '<span style="color:red">Low rating (0-4)</span>';
    } else if (averageScore > 4 && averageScore <= 7) {
        averageMessage = '<span style="color:orange">Medium rating (4-7)</span>';
    } else {
        averageMessage = '<span style="color:green">High rating (7-10)</span>';
    }

    resultDiv.innerHTML += `<p>Average Score: ${averageScore}</p>`;
    resultDiv.innerHTML += `<p>${averageMessage}</p>`;
});