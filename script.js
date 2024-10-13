document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskActionBtn = document.getElementById('add-task-btn'); // Renamed variable to avoid 'addButton'
    const taskList = document.getElementById('task-list');

    // Arrow function to create and append new task
    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Create new list item
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            // Append the button to the list item
            listItem.appendChild(removeBtn);

            // Add list item to the task list
            taskList.appendChild(listItem);

            // Clear input field after adding task
            taskInput.value = '';

            // Add event listener to remove task
            removeBtn.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
        }
    };

    // Add task when the button is clicked
    taskActionBtn.addEventListener('click', addTask); // Replaced 'addButton' with 'taskActionBtn'

    // Add task when the Enter key is pressed
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
