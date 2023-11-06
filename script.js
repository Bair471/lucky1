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

