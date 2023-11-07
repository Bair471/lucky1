const taskManager = {
    tasks: [],
    addTask: function (title, desctipiton) {
        const task = {
            id: this.generateUniqueId(),
            title: title,
            desctipiton: desctipiton,
            stats: 'В Работе',
        };
        this.tasks.push(task);
    },
}




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



