
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


// const categories = [
//     { Bikes },
//     { Helmets },
//     { Parts },
//     { Accessories },
//     { Clothing },
//     { Brands }

// ];

// const bikes = [
//     { id: 1, title: 'mountain bike', price: 100 },
//     { id: 2, title: 'road bike', price: 200 },
//     { id: 3, title: 'city bike', price: 300 }
// ];

/*
    getElementById - получает элемент по id из html
    createElement - создает элемент в js (не в html)
        .innerText - текст внутри элемента (только для текстовых элементов)
    table - TABLE
    tr - ROW
    td or th - CELL
 */

// update table with bike-table id

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




// const mainLogo = document.getElementById("giant");
// mainLogo.style.margin = "-8px";
// mainLogo.style.width = "102%";

// const div = document.createElement("div");
// const text = "ROLL WITH CONFIDENCE !";
// const divContent = document.createTextNode(text);
// div.appendChild(divContent);
// document.body.appendChild(div);
// div.style.color = "white";
// div.style.fontSize = "20px";
// div.style.fontFamily = "monospace";
// div.style.marginTop = "-65px";
// div.style.marginLeft = "90px";
// div.style.fontStyle = "italic";

// const bikes = [
//     { id: 1, title: 'mountain bike', price: 100 },
//     { id: 2, title: 'road bike', price: 200 },
//     { id: 3, title: 'city bike', price: 300 }
// ];

// const table = document.getElementById('bike-table');
// table.style.color = "black";
// table.style.fontSize = "25px";
// table.style.display = "inline-block";
// table.style.float= "left";

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

// class Note {
//     _name =""

//     constructor(container, name="", done = false) {
//         this.item = document.createElement("div");
//         this.buttonGroup = document.createElement("div");
//         this.nameSpan = document.createElement("span");
//         this.doneButton = document.createElement("button");
//         this.deleteButton = document.createElement("button");


//         this.item.classList.add(
//         'list-group-item',
//         'd-flex',
//         'justify-content-between',
//         'align-items-center'
//         )
//         this.buttonGroup.classList.add("btn-group", "btn-group-sm");
//         this.doneButton.classList.add("btn", "btn-success");
//         this.doneButton.textContent = 'Готово';
//         this.deleteButton.classList.add("btn", "btn-danger");
//         this.deleteButton.textContent = 'Удалить';

//         this.buttonGroup.append(this.doneButton);
//         this.buttonGroup.append(this.deleteButton);
//         this.item.append(this.nameSpan);
//         this.item.append(this.buttonGroup);

//         this.name = name

//         container.append(this.item)
//     }
//     set name(value) {
//         this._name = value
//         this.nameSpan.textContent = value
//     }

//     get name() {
//         return this._name
//     }
// }

// let NewNote = new Note(document.getElementById('app'), 'Привет')
// let NewNote2 = new Note(document.getElementById('app'), 'Kak dela')




const mainLogo = document.getElementById("giant");
mainLogo.style.margin = "-10px";
mainLogo.style.width = "102%";

const div = document.createElement("div");
const text = "ROLL WITH CONFIDENCE !";
const divContent = document.createTextNode(text);
div.appendChild(divContent);
document.body.appendChild(div);
div.style.color = "white";
div.style.fontSize = "25px";
div.style.fontFamily = "sans-serif";
div.style.marginTop = "-100px";
div.style.marginLeft = "60px";
div.style.fontStyle = "italic";


const brandSwitch = document.getElementById("brandswitch");
    brandSwitch.style.transition = "all .2s ease";
    brandSwitch.style.background ="rgb(14 155 214)";
    brandSwitch.style.top = "0";
    brandSwitch.style.height = "30px";
    brandSwitch.style.textAlign = "left";
    brandSwitch.style.zIndex ="1050";
    brandSwitch.style.marginInline = "-10px";
    

const navigation = document.getElementById("navigation");
    navigation.style.display = "-webkit-inline-box";
    navigation.style.float = "left";
    navigation.style.listStyle = "none";


const listItems = document.querySelectorAll('.list-items');
for(i = 0; i <= listItems.length; i++) {
    listItems[i].style.fontFamily = "sans-serif";
    listItems[i].style.marginLeft = "20px";
    listItems[i].style.marginTop = "-40px";
    listItems[i].style.color = "white";
    listItems[i].style.marginRight = "40px";
    listItems[i].style.fontStyle = "italic";
}

console.log(listItems);
 


document.querySelector('#elastic').oniput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val !== '') {
        elasticItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else { 
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
        })
    }
}

function insertMark(string, pos) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '<mark>' + string.slice(pos + len);

}
