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




const taskManager = {
    tasks: [],

    addTask: function (title, description) {
        const task = {
            id: generateunqiueId(),
            title: title,
            description: description,
            status: `В Работе`,
        }
        this.tasks.push(task)
    },

    generateunqiueId: function () {
        return Math.random().toString(36).substring(2, 9);
    },

    listId: function (taskId) {
        const newTask = [];
        for (let i = 0; i < this.tasks.length; i += 1) {
            if (this.tasks.id[i] !== taskId) {
                this.tasks.push(newTask[i]);
            }
            console.log(newTask[i]);
        }
    },

};