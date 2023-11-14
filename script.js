// const taskManager = {
//     tasks: [],
//     addTask: function (title, desctipiton) {
//         const task = {
//             id: this.generateUniqueId(),
//             title: title,
//             desctipiton: desctipiton,
//             stats: 'В Работе',
//         };
//         this.tasks.push(task);
//     },
// }




function addition(a, b) {
    return a + b;
};

const result = addition(5, 3);
console.log(result);




function convert(minutes) {
    return minutes * 60;
};

const result = convert(5);

console.log(result);




function addition(num) {
    return num + 1;
};

const result = addition(5);

console.log(result);




function triArea(base, height) {
    return (base * height) / 2;
};

const result = triArea(3, 2);

console.log(result);



function calcAge(age) {
    return age * 365;
};


const result = calcAge(30);
console.log(result);




function cubes(a) {
    return a ** 3;
}

const result = cubes(3);
console.log(result);




const numbers = [1, 2, 3];

function getFirstValue(arr) {
    return arr[0];
}



function circuitPower(voltage, current) {
    return voltage * current;
}

const result = circuitPower(230, 10);
console.log(result);



function howManySeconds(hours) {
    return hours * 60 * 60;
}

const result = howManySeconds(2);
console.log(result);



function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}

const result = nextEdge(8, 10);
console.log(result);





const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function listNumbers() {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > 50) {
            newNumbers.push(numbers[i]);
        }
    }
    console.log(newNumbers);
}

console.log(listNumbers());




function lessThan100(a, b) {
    if (a + b >= 100) {
        return false
    } else {
        return true
    }
};

console.log(lessThan100(22, 15));


function printArray(number) {
    var newArray = [];

    for (var i = 1; i <= number; i += 1) {
        newArray.push(i);
    }

    return newArray;
}




function animals(chickens, cows, pigs) {
    return chickens * 2 + cows * 4 + pigs * 4;
}

console.log(animals(2, 3, 5));


const jonas = [
    'Jonas'
    'Schmidman'
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i += 1) {
    console.log(jonas[i], typeof jonas[i]);
    types[i] = typeof jonas[i];
}

console.log(types);


function isSameNum(num1, num2) {
    return num1 === num2;
}

console.log(isSameNum(2, 2));


function convert(hours, minutes) {
    return (hours * 60 * 60) + (minutes * 60);
}

console.log(convert(1, 3));


function inchesToFeet(inches) {
    if (inches < 12) {
        return 0
    }

    const result = inches / 12;
    return result;
}


console.log(inchesToFeet(324));


// const taskManager = {
//     tasks: [],

//     addTask: function (title, description) {
//         const task = {
//             id: generateunqiueId(),
//             title: title,
//             description: description,
//             status: `В Работе`,
//         }
//         this.tasks.push(task)
//     },

//     generateunqiueId: function () {
//         return Math.random().toString(36).substring(2, 9);
//     },

//     listId: function (taskId) {
//         const newTask = [];
//         for (let i = 0; i < this.tasks.length; i += 1) {
//             if (this.tasks.id[i] !== taskId) {
//                 this.tasks.push(newTask[i]);
//             }
//             console.log(newTask[i]);
//         }
//     },

// };




const taskManager = {
    tasks: [],

    addTask: function (title, description) {
        const task = {
            id: this.generateUniqueId(),
            title: title,
            description: description,
            status: 'В работе',
        };
        this.tasks.push(task);
    },


    generateUniqueId: function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    },


    changeTaskStatus: function (taskId, newStatus) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.status = newStatus;
        }
    },

    changeTaskStatus1: function (taskId, newStatus) {
        for (let i = 0; i < this.tasks.length; i += 1) {
            if (this.tasks[i].id === taskId) {
                this.tasks[i].status = newStatus;
            }
        }
    },


    deleteTask: function (taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);

    },

    deleteTask1: function (taskId) {
        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i += 1) {
            if (this.tasks[i].id !== taskId) {
                this.tasks[i].push(newTasks[i]);
            }
        }
        this.tasks = newTasks
    },

    listTasks: function () {
        return this.tasks;
    },

    listID: function () {
        for (let i = 0; i < this.tasks.length; i += 1) {
            console.log(this.tasks[i].id);
        }
    }
};



taskManager.addTask('Задача 1', 'Описание задачи 1');
taskManager.addTask('Target 1', 'Mission complete');
taskManager.addTask('Target 2', 'Mission complete2');

console.log('Список задач:');
console.log(taskManager.listTasks());


const taskId = taskManager.tasks[0, 1].id;
taskManager.changeTaskStatus1([0], 'Запрещено');
console.log('Изменённый статус первой задачи:');
console.log(taskManager.listTasks());

taskManager.deleteTask1(taskId);
// console.log('Удалена первая задача:');
console.log(taskManager.listTasks());





const TaskManager = {
    tasks: [],
    addTask: function (title, description) {
        const task = {
            id: this.idGeneartor(),
            title: title,
            description: description,
            status: 'In Progress',
        }
        this.tasks.push(task);
    },

    deleteTask: function (taskId) {
        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i += 1) {
            if (this.tasks[i].id !== taskId) {
                newTasks.push(this.tasks[i]);
            }
        }
    },

    changeStatus: function (taskId) {
        for (let i = 0; i < this.tasks.length; i += 1) {

        }
    }

};





function isSeven(x) {
    if (x === 7) {
        return true;
    } else {
        return false;
    }
};

console.log(isSeven());


function checkEquality(a, b) {
    return a === b;
}


console.log(checkEquality());



function circuitPower(voltage, current) {
    return voltage * current;
}

console.log(circuitPower())


function profitableGamble(prob, prize, pay) {
    if (prob * prize > pay) {
        return true
    } else {
        return false
    }
};


function boolToString(flag) {
    return flag.toString();
}

// create your arrow function below
const arrowFunc = (n) => n;



function frames(minutes, fps) {
    return minutes * 60 * fps;
}

console.log(frames(1, 1));




const numbers = [1, 2, 3, -4, 5, -6, -7];

const filtered = numbers.filter(n => 0 n => 0);


console.log(filtered);


function concatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}



function has_bugs(buggyCode) {
    if (buggyCode) {
        return "sad days"
    } else {
        return "it's a good day"
    }
}



const eq = evaluate => eval(evaluate)



function reverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i > -1; i--) {
        result.push(arr[i]);
    }

    console.log(...result);
    return result;
};



function footballPoints(wins, draws, losses) {
    return (wins * 3) + (draws * 1) + (losses * 0);
};



const taskManager = {
    tasks: [],
    addTask: function (title, description) {
        task = {
            id: id,
            title: title,
            description: "Start"
        }
        this.tasks.push(task)
    },


}