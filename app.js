//Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all Event listeners

loadEventListeners();

function loadEventListeners() {

    //add event task
    form.addEventListener('submit', addTask);
    // Remove Task Event
    taskList.addEventListener('click' , removeTask);
}


function addTask (e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }


    // Create li element
    const li = document.createElement('li');
    // add class
    li.classname = 'collection-item';
    // create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link
    const link = document.createElement('a');
    // add class
    link.classname = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fas fa-trash"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
    
    //Clear input
    taskInput.value = '';

    e.preventDefault();
}

function removeTask(e) {
    
}