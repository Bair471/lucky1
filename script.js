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

