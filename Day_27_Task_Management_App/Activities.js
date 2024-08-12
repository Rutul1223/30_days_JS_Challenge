/* Activity -> 1 : Setting Up the Project */

// Task_1 - Initialize a new project directory and set up the basic HTML structure for the task management app.

// Answer :- Explore index.html file

// Task_2 - Add a basic CSS file to style the task management app, including a container for displaying tasks and a form for adding new tasks.

// Answer :- Explore styles.css file

/* Activity -> 2 : Creating Tasks */

// Task_3 - Add a form to the HTML structure with fields for entering task details (e.g., title, description, due date) Style the form using CSS.

// Answer :- Explore index.html styles.css file

// Task_4 - Write a script to handle form submission, creating a new task object and adding it to an array of tasks. Display the new task in the task list. 

// document.addEventListener('DOMContentLoaded', () => {
//     const taskForm = document.querySelector('#task-form form');
//     const taskList = document.querySelector('#task-list ul');
//     const tasks = [];

//     taskForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         // Get form values
//         const title = document.querySelector('#task-title').value;
//         const desc = document.querySelector('#task-desc').value;
//         const due = document.querySelector('#task-due').value;

//         // Create a new task object
//         const newTask = {
//             title,
//             desc,
//             due
//         };

//         // Add the new task to the tasks array
//         tasks.push(newTask);

//         // Display the new task
//         displayTask(newTask);

//         // Reset the form
//         taskForm.reset();
//     });

//     const displayTask = task => {
//         const taskItem = document.createElement('li');
//         taskItem.innerHTML = `<h3>${task.title}</h3>
//                               <p>${task.desc}</p>
//                               <small>Due: ${task.due}</small>`;

//         taskList.appendChild(taskItem);
//     };
// });

/* Activity -> 3 : Reading and Displaying Tasks */

// Task_5 - Write a function to iterate over the array of tasks and display each task in the task list. Include task details like title, description and due date.

// Answer :- Refer Task_4 is same 

// Task_6 - Style the task list using CSS to make it visually appealing.

// Answer :- Explore styles.css file

/* Activity -> 4 : Updating Tasks */

// Task_7 - Add an "Edit" button to each task item in the task list. Write a function to populate the form with the task details when the "Edit" button is clicked.

// document.addEventListener('DOMContentLoaded', () => {
//     const taskForm = document.querySelector('#task-form form');
//     const taskList = document.querySelector('#task-list ul');
//     const tasks = [];

//     taskForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         // Get form values
//         const title = document.querySelector('#task-title').value;
//         const desc = document.querySelector('#task-desc').value;
//         const due = document.querySelector('#task-due').value;

//         // Create a new task object
//         const newTask = {
//             title,
//             desc,
//             due
//         };

//         // Add the new task to the tasks array
//         tasks.push(newTask);

//         // Display the new task
//         displayTask(newTask);

//         // Reset the form
//         taskForm.reset();
//     });

//     const displayTask = () => {
//         taskList.innerHTML = '';

//         tasks.forEach((task, index) => {
//             const taskItem = document.createElement('li');
//             taskItem.innerHTML = `<h3>${task.title}</h3>
//                                   <p>${task.desc}</p>
//                                   <small>Due: ${task.due}</small>
//                                   <button class="edit-btn" data-index="${index}">Edit</button>`;
//             taskList.appendChild(taskItem);
//         });

//         document.querySelectorAll('.edit-btn').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 const index = event.target.dataset.index;
//                 populateForm(tasks[index], index);
//             });
//         });
//     };

//     const populateForm = (task, index) => {
//         document.querySelector('#task-title').value = task.title;
//         document.querySelector('#task-desc').value = task.desc;
//         document.querySelector('#task-due').value = task.due;
//         taskForm.dataset.index = index;
//     };
// });

// Task_8 - Write a function to update the task object in the array and refresh the task list display after editing a task. 

// document.addEventListener('DOMContentLoaded', () => {
//     const taskForm = document.querySelector('#task-form form');
//     const taskList = document.querySelector('#task-list ul');
//     const tasks = [];
//     let isEditing = false;
//     let currentIndex = null;

//     taskForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const title = document.querySelector('#task-title').value;
//         const desc = document.querySelector('#task-desc').value;
//         const due = document.querySelector('#task-due').value;

//         const newTask = {
//             title,
//             desc,
//             due
//         };

//         if (isEditing) {
//             tasks[currentIndex] = newTask;
//             isEditing = false;
//             currentIndex = null;
//         } else {
//             tasks.push(newTask);
//         }

//         displayTasks();
//         taskForm.reset();
//     });

//     const displayTasks = () => {
//         taskList.innerHTML = '';

//         tasks.forEach((task, index) => {
//             const taskItem = document.createElement('li');
//             taskItem.innerHTML = `<h3>${task.title}</h3>
//                                   <p>${task.desc}</p>
//                                   <small>Due: ${task.due}</small>
//                                   <button class="edit-btn" data-index="${index}">Edit</button>`;
//             taskList.appendChild(taskItem);
//         });

//         document.querySelectorAll('.edit-btn').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 const index = event.target.dataset.index;
//                 populateForm(tasks[index], index);
//             });
//         });
//     };

//     const populateForm = (task, index) => {
//         document.querySelector('#task-title').value = task.title;
//         document.querySelector('#task-desc').value = task.desc;
//         document.querySelector('#task-due').value = task.due;
//         isEditing = true;
//         currentIndex = index;
//     };
// });

/* Activity -> 5 : Deleting Tasks */

// Task_9 - Add a 'Delete' button to each task item in the task list. Write a function to remove the task from the array and refresh the task list display when the 'Delete' button is clicked.

// document.addEventListener('DOMContentLoaded', () => {
//     const taskForm = document.querySelector('#task-form form');
//     const taskList = document.querySelector('#task-list ul');
//     const tasks = [];
//     let isEditing = false;
//     let currentIndex = null;

//     taskForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const title = document.querySelector('#task-title').value;
//         const desc = document.querySelector('#task-desc').value;
//         const due = document.querySelector('#task-due').value;

//         const newTask = {
//             title,
//             desc,
//             due
//         };

//         if (isEditing) {
//             tasks[currentIndex] = newTask;
//             isEditing = false;
//             currentIndex = null;
//         } else {
//             tasks.push(newTask);
//         }

//         displayTasks();
//         taskForm.reset();
//     });

//     const displayTasks = () => {
//         taskList.innerHTML = '';

//         tasks.forEach((task, index) => {
//             const taskItem = document.createElement('li');
//             taskItem.innerHTML = `<h3>${task.title}</h3>
//                                   <p>${task.desc}</p>
//                                   <small>Due: ${task.due}</small>
//                                   <button class="edit-btn" data-index="${index}">Edit</button>
//                                   <button class="delete-btn" data-index="${index}">Delete</button>`;
//             taskList.appendChild(taskItem);
//         });

//         document.querySelectorAll('.edit-btn').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 const index = event.target.dataset.index;
//                 populateForm(tasks[index], index);
//             });
//         });

//         document.querySelectorAll('.delete-btn').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 const index = event.target.dataset.index;
//                 deleteTask(index);
//             });
//         });
//     };

//     const populateForm = (task, index) => {
//         document.querySelector('#task-title').value = task.title;
//         document.querySelector('#task-desc').value = task.desc;
//         document.querySelector('#task-due').value = task.due;
//         isEditing = true;
//         currentIndex = index;
//     };

//     const deleteTask = (index) => {
//         tasks.splice(index, 1);
//         displayTasks();
//     };
// });

// Task_10 - Add a confirmation dialog before deleting a task to prevent accidental deletions.

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.querySelector('#task-form form');
    const taskList = document.querySelector('#task-list ul');
    const tasks = [];
    let isEditing = false;
    let currentIndex = null;

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.querySelector('#task-title').value;
        const desc = document.querySelector('#task-desc').value;
        const due = document.querySelector('#task-due').value;

        const newTask = {
            title,
            desc,
            due
        };

        if (isEditing) {
            tasks[currentIndex] = newTask;
            isEditing = false;
            currentIndex = null;
        } else {
            tasks.push(newTask);
        }

        displayTasks();
        taskForm.reset();
    });

    const displayTasks = () => {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `<h3>${task.title}</h3>
                                  <p>${task.desc}</p>
                                  <small>Due: ${task.due}</small>
                                  <button class="edit-btn" data-index="${index}">Edit</button>
                                  <button class="delete-btn" data-index="${index}">Delete</button>`;
            taskList.appendChild(taskItem);
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.dataset.index;
                populateForm(tasks[index], index);
            });
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.dataset.index;
                if (confirm('Are you sure you want to delete this task?')) {
                    deleteTask(index);
                }
            });
        });
    };

    const populateForm = (task, index) => {
        document.querySelector('#task-title').value = task.title;
        document.querySelector('#task-desc').value = task.desc;
        document.querySelector('#task-due').value = task.due;
        isEditing = true;
        currentIndex = index;
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        displayTasks();
    };
});