const fs = require('fs');

class Task {
  filePath = './task.json';
  tasks;
  id;
  constructor() {
    this.tasks = JSON.parse(fs.readFileSync('./task.json', 'utf-8'));
    this.id = this.tasks.length + 1;
  }

  add(description) {
    const taskData = {
      id: this.id++,
      description: description,
      status: 'todo',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.tasks.push(taskData);
    this.writeToJSON();
    console.log(`Task added successfully (ID:${taskData.id})`);
  }

  update(id, description) {
    if (this.isInvalid(id)) {
      console.log('Task not found');
    } else {
      this.tasks[id - 1].description = description;
      this.tasks[id - 1].updateAt = new Date();
      this.writeToJSON();
      console.log(`Task updated successfully (ID:${id})`);
    }
  }

  delete(id) {
    if (this.isInvalid(id)) {
      console.log('Task not found');
    } else {
      this.tasks.splice(id - 1, 1);
      this.writeToJSON();
      console.log(`Task deleted successfully (ID:${id})`);
    }
  }

  markInProgress(id) {
    if (this.isInvalid(id)) {
      console.log('Task not found');
    } else {
      this.tasks[id - 1].status = 'in-progress';
      this.tasks[id - 1].updateAt = new Date();
      this.writeToJSON();
      console.log(`Task as in progress (ID:${id})`);
    }
  }

  markDone(id) {
    if (this.isInvalid(id)) {
      console.log('Task not found');
    } else {
      this.tasks[id - 1].status = 'done';
      this.tasks[id - 1].updateAt = new Date();
      this.writeToJSON();
      console.log(`Task done (ID:${id})`);
    }
  }

  list(status) {
    console.log('Task List:');
    let tasks = this.filterListTask(status);

    tasks.forEach((task, index) => {
      console.log(`${++index}. ${task.description}  [${task.status}] [Create at: ${new Date(task.createdAt).toLocaleDateString()}] [Update at: ${new Date(task.updateAt).toLocaleDateString()}]`);
    });
  }

  filterListTask (status) {
    let tasks = this.tasks;

    if (status === 'done') {
      tasks = tasks.filter(task => task.status === 'done');
    } else if (status === 'todo') {
      tasks = tasks.filter(task => task.status === 'todo');
    } else if (status === 'in-progress') {
      tasks = tasks.filter(task => task.status === 'in-progress');
    }

    return tasks;
  }

  isInvalid(id) {
    return isNaN(id) || id > this.tasks.length;
  }

  writeToJSON() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.tasks));
  }
}

module.exports = Task;
