const taskManager = {
    tasks: [],
    addTask: function (title, id) {
        const task = {
            id: id,
            title: title,
        }
        this.tasks.push(task);
        return task.id;
    },
    listTasks: function () {
        for (let i = 0; i < this.tasks.length; i++) {
            const id = this.tasks[i].id;
            console.log(id);
        }
    },
};

taskManager.addTask("Beginner", 10);
taskManager.addTask("Beginner 2", 11);
taskManager.addTask("Beginner 3", 12);

taskManager.listTasks();
