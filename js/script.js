// Form Validation for Contact Page
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    } else if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
    // Additional validation can be added as needed
});

// Search Functionality for Tutorials Page
function searchTutorials() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let tutorials = document.querySelectorAll('.tutorial');

    tutorials.forEach((tutorial) => {
        let title = tutorial.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            tutorial.style.display = '';
        } else {
            tutorial.style.display = 'none';
        }
    });
}

// Make sure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Check if the searchInput element exists to avoid errors on pages without it
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', searchTutorials);
    }
});
