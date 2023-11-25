
const taskManager = document.getElementById('task-name')
let tasks = [];

        function addTask() {
            // Get the task input value
            const taskInput = document.getElementById("taskInput");
            const taskText = taskInput.value.trim();

            // Add the task to the tasks array and update the task list
            if (taskText !== "") {
                tasks.push(taskText);
                updateTaskList();
                // Clear the input field
                taskInput.value = "";
            }
        }

        function updateTaskList() {
            // Get the task list element
            const taskList = document.getElementById("taskList");

            // Clear the existing list items
            taskList.innerHTML = "";

            // Add each task as a list item
            tasks.forEach((task) => {
                const listItem = document.createElement("li");
                listItem.textContent = task;
                taskList.appendChild(listItem);
            });
        }

        function searchTasks() {
            // Get the search input value
            const searchInput = document.getElementById("searchInput");
            const searchTerm = searchInput.value.toLowerCase();

            // Filter tasks based on the search term
            const filteredTasks = tasks.filter(task => task.toLowerCase().includes(searchTerm));

            // Update the task list with the filtered tasks
            tasks = filteredTasks;
            updateTaskList();
        }




const bikes = [
    { id: 1, title: 'mountain bike', price: 100 },
    { id: 2, title: 'road bike', price: 200 },
    { id: 3, title: 'city bike', price: 300 }
];

/*
    getElementById - получает элемент по id из html
    createElement - создает элемент в js (не в html)
        .innerText - текст внутри элемента (только для текстовых элементов)
    table - TABLE
    tr - ROW
    td or th - CELL
 */

// update table with bike-table id

const table = document.getElementById('bike-table');
function createTableHeader() {
    const header = document.createElement('tr');
    const headerId = document.createElement('th');
    headerId.innerText = 'id';
    const headerTitle = document.createElement('th');
    headerTitle.innerText = 'title';
    const headerPrice = document.createElement('th');
    headerPrice.innerText = 'price';
    header.appendChild(headerId);
    header.appendChild(headerTitle);
    header.appendChild(headerPrice);
    table.appendChild(header);
}

// create table body
function createTableBody() {
    const body = document.createElement('tbody');
    table.appendChild(body);

    // create table rows
    bikes.forEach((bike) => {
        const row = document.createElement('tr');
        const cellId = document.createElement('td');
        cellId.innerText = bike.id;
        const cellTitle = document.createElement('td');
        cellTitle.innerText = bike.title;
        const cellPrice = document.createElement('td');
        cellPrice.innerText = bike.price;
        row.appendChild(cellId);
        row.appendChild(cellTitle);
        row.appendChild(cellPrice);
        body.appendChild(row);
    });
}

createTableHeader();
createTableBody();




