document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskActionBtn = document.getElementById('add-task-btn'); // Renamed from addButton to taskActionBtn
    const taskList = document.getElementById('task-list');
    const feedbackDiv = document.getElementById('feedback');

    // Arrow function to create and append new task
    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            // Provide feedback to the user if input is empty instead of using alert
            feedbackDiv.innerHTML = 'Please enter a task.';
            feedbackDiv.style.color = '#dc3545'; // Red color for error
            return;
        }

        // Clear any previous feedback when a valid task is entered
        feedbackDiv.innerHTML = '';

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
    };

    // Add task when the button is clicked
    taskActionBtn.addEventListener('click', addTask); // Using taskActionBtn instead of addButton

    // Add task when the Enter key is pressed
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const actionButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const feedbackDiv = document.getElementById('feedback');

    // Load tasks from local storage when the page loads
    const loadTasks = () => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving them again
    };

    // Function to handle adding tasks
    const addTask = (taskText, save = true) => {
        // Create task element in the DOM
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Save the task to local storage if necessary
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear input field after adding the task
        taskInput.value = '';

        // Handle task removal
        removeBtn.onclick = () => {
            taskList.removeChild(listItem);
            removeTaskFromStorage(taskText);
        };
    };

    // Function to remove a task from local storage
    const removeTaskFromStorage = (taskText) => {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    };

    // Handle button click for adding tasks
    actionButton.onclick = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            feedbackDiv.innerHTML = 'Please enter a task.';
            feedbackDiv.style.color = '#dc3545'; // Error color
            return;
        }

        feedbackDiv.innerHTML = ''; // Clear any previous feedback
        addTask(taskText);
    };

    // Handle "Enter" keypress to add tasks
    taskInput.onkeypress = (e) => {
        if (e.which === 13) {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
            }
        }
    };

    // Load tasks from local storage when the page loads
    loadTasks();
});


