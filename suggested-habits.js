// Add event listener for preset habit buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-preset-btn')) {
        const presetHabit = e.target.previousElementSibling.textContent;
        // Store the habit in localStorage
        localStorage.setItem('habitToAdd', presetHabit);
        // Redirect back to the main page
        window.location.href = 'index.html';
    }
});
