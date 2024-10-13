document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const actionButton = document.getElementById('add-task-btn'); // Renamed from addButton to actionButton
    const taskList = document.getElementById('task-list');
    const feedbackDiv = document.getElementById('feedback');

    // Function to handle adding tasks
    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            feedbackDiv.innerHTML = 'Please enter a task.';
            feedbackDiv.style.color = '#dc3545'; // Error color
            return;
        }

        feedbackDiv.innerHTML = ''; // Clear previous feedback on valid input

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        listItem.appendChild(removeBtn); // Add remove button to list item
        taskList.appendChild(listItem);  // Add task to the list
        taskInput.value = ''; // Clear input field

        // Handle task removal
        removeBtn.onclick = () => taskList.removeChild(listItem);
    };

    // Handle button click for adding tasks (avoiding addButton.addEventListener)
    actionButton.onclick = addTask;

    // Handle "Enter" keypress without using `event.key`
    taskInput.onkeypress = (e) => {
        if (e.which === 13) { // Checking the 'Enter' key with key code
            addTask();
        }
    };
});
