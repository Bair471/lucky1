
// const taskManager = document.getElementById('task-name')
// let tasks = [];

//         function addTask() {
//             // Get the task input value
//             const taskInput = document.getElementById("taskInput");
//             const taskText = taskInput.value.trim();

//             // Add the task to the tasks array and update the task list
//             if (taskText !== "") {
//                 tasks.push(taskText);
//                 updateTaskList();
//                 // Clear the input field
//                 taskInput.value = "";
//             }
//         }

//         function updateTaskList() {
//             // Get the task list element
//             const taskList = document.getElementById("taskList");

//             // Clear the existing list items
//             taskList.innerHTML = "";

//             // Add each task as a list item
//             tasks.forEach((task) => {
//                 const listItem = document.createElement("li");
//                 listItem.textContent = task;
//                 taskList.appendChild(listItem);
//             });
//         }

//         function searchTasks() {
//             // Get the search input value
//             const searchInput = document.getElementById("searchInput");
//             const searchTerm = searchInput.value.toLowerCase();

//             // Filter tasks based on the search term
//             const filteredTasks = tasks.filter(task => task.toLowerCase().includes(searchTerm));

//             // Update the task list with the filtered tasks
//             tasks = filteredTasks;
//             updateTaskList();
//         }


const categories = [
    { Bikes },
    { Helmets },
    { Parts },
    { Accessories },
    { Clothing },
    { Brands }

];

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






// const bikes = [
//     { id: 1, title: 'mountain bike', price: 100 },
//     { id: 2, title: 'road bike', price: 200 },
//     { id: 3, title: 'city bike', price: 300 }
// ];

// const table = document.getElementById('bike-table');
// function createTableHeader() {
//     const header = document.createElement('tr');
//     const headerId = document.createElement('th');
//     headerId.innerText = 'id';
//     const headerTitle = document.createElement('th');
//     headerTitle.innerText = 'title';
//     const headerPrice = document.createElement('th');
//     headerPrice.innerText = 'price';
//     header.appendChild(headerId);
//     header.appendChild(headerTitle);
//     header.appendChild(headerPrice);
//     table.appendChild(header);
// }

// // create table body
// function createTableBody() {
//     const body = document.createElement('tbody');
//     table.appendChild(body);

//     // create table rows
//     bikes.forEach((bike) => {
//         const row = document.createElement('tr');
//         const cellId = document.createElement('td');
//         cellId.innerText = bike.id;
//         const cellTitle = document.createElement('td');
//         cellTitle.innerText = bike.title;
//         const cellPrice = document.createElement('td');
//         cellPrice.innerText = bike.price;
//         row.appendChild(cellId);
//         row.appendChild(cellTitle);
//         row.appendChild(cellPrice);
//         body.appendChild(row);
//     });
// }



// createTableHeader();
// createTableBody();


// // Получаем ссылки на элементы
// const searchInput = document.getElementById('searchInput');
// const dataTable = document.getElementById('bike-table');

// // Добавляем обработчик события для ввода в поле поиска
// searchInput.addEventListener('input', function () {
//     searchTable();
// });

// // Функция для поиска и отображения результатов
// function searchTable() {
//     const searchTerm = searchInput.value.toLowerCase();
//     const rows = dataTable.getElementsByTagName('tr');

//     for (let i = 1; i < rows.length; i++) {  // Начинаем с 1, чтобы пропустить заголовок таблицы
//         const cells = rows[i].getElementsByTagName('td');
//         let found = false;

//         for (let j = 0; j < cells.length; j++) {
//             const cellText = cells[j].innerText.toLowerCase();
//             if (cellText.includes(searchTerm)) {
//                 found = true;
//                 break;
//             }
//         }

//         if (found) {
//             rows[i].style.display = '';
//         } else {
//             rows[i].style.display = 'none';
//         }
//     }
// }









