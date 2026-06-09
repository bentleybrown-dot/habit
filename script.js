// Select elements
const habitList = document.getElementById('habits');
const habitForm = document.getElementById('habit-form');
const newHabitInput = document.getElementById('new-habit');

// Function to add a habit to the list
function addHabitToList(habitText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="habit-checkbox">
        <span>${habitText}</span>
        <button class="delete-btn">Delete</button>
    `;
    habitList.appendChild(li);
}

// Add event listener for adding a new habit
habitForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const newHabit = newHabitInput.value;
    if (newHabit === '') {
        alert('Please enter a habit!');
        return;
    }

    addHabitToList(newHabit);

    // Clear input field
    newHabitInput.value = '';
});

// Add event listener for preset habit buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-preset-btn')) {
        const presetHabit = e.target.previousElementSibling.textContent;
        addHabitToList(presetHabit);
    }
});

// Add event listener for marking habits as complete
habitList.addEventListener('change', function(e) {
    if (e.target.classList.contains('habit-checkbox')) {
        const checkbox = e.target;
        const habitText = checkbox.nextElementSibling;

        // BUG: Progress tracker doesn't update
        if (checkbox.checked) {
            habitText.style.textDecoration = 'line-through';
        } else {
            habitText.style.textDecoration = 'none';
        }
    }
});

// Add event listener for deleting habits
habitList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        const habitText = li.querySelector('span').textContent;
        
        if (confirm(`Are you sure you want to delete "${habitText}"?`)) {
            habitList.removeChild(li);
        }
    }
});
