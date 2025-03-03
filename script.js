document.addEventListener('DOMContentLoaded', function() {
    // Hide newsletter popup on page load
    const newsletter = document.getElementById('newsletter');
    newsletter.style.display = 'none';
});

function toggleNewsletter() {
    const newsletter = document.getElementById('newsletter');
    
    if (newsletter.style.display === 'none') {
        // Show newsletter with fade-in effect
        newsletter.style.display = 'flex';
        newsletter.style.opacity = '0';
        setTimeout(() => {
            newsletter.style.opacity = '1';
        }, 10);
    } else {
        // Hide newsletter with fade-out effect
        newsletter.style.opacity = '0';
        setTimeout(() => {
            newsletter.style.display = 'none';
        }, 300);
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const newsletter = document.getElementById('newsletter');
    const popup = document.querySelector('.popup');
    const subscribeButton = document.querySelector('.button');

    if (event.target === newsletter && 
        !popup.contains(event.target) && 
        event.target !== subscribeButton) {
        toggleNewsletter();
    }
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        // Here you would typically send the email to your server
        alert('Thank you for subscribing!');
        emailInput.value = '';
        toggleNewsletter();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}