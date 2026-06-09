// Get all habits from the data container
const habitsData = document.querySelectorAll('.habit-item');
const habits = Array.from(habitsData).map(item => item.textContent);

let currentIndex = 0;
let autoRotateInterval;

// Elements
const habitText = document.getElementById('habit-text');
const habitCounter = document.getElementById('habit-counter');
const addBtn = document.getElementById('carousel-add-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Display the current habit
function displayHabit(index) {
    habitText.textContent = habits[index];
    habitCounter.textContent = `${index + 1} / ${habits.length}`;
}

// Move to next habit
function nextHabit() {
    currentIndex = (currentIndex + 1) % habits.length;
    displayHabit(currentIndex);
    resetAutoRotate();
}

// Move to previous habit
function prevHabit() {
    currentIndex = (currentIndex - 1 + habits.length) % habits.length;
    displayHabit(currentIndex);
    resetAutoRotate();
}

// Auto-rotate every 1 second
function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
        nextHabit();
    }, 1000);
}

// Reset the auto-rotate timer
function resetAutoRotate() {
    clearInterval(autoRotateInterval);
    startAutoRotate();
}

// Add habit from carousel
addBtn.addEventListener('click', function() {
    const presetHabit = habits[currentIndex];
    localStorage.setItem('habitToAdd', presetHabit);
    window.location.href = 'index.html';
});

// Manual navigation buttons
prevBtn.addEventListener('click', prevHabit);
nextBtn.addEventListener('click', nextHabit);

// Initialize
window.addEventListener('load', function() {
    displayHabit(currentIndex);
    startAutoRotate();
});

