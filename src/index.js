const Task = require('./task');

const task = new Task();
const command = process.argv[2];

switch (command) {
  case 'add': {
    const query = process.argv[3];
    task.add(query);
    break;
  }

  case 'update': {
    const id = process.argv[3];
    const query = process.argv[4];
    task.update(parseInt(id), query);
    break;
  }
  case 'delete': {
    const id = process.argv[3];
    task.delete(parseInt(id));
    break;
  }
  case 'mark-in-progress': {
    const id = process.argv[3];
    task.markInProgress(id);
    break;
  }
  case 'mark-done': {
    const id = process.argv[3];
    task.markDone(id);
    break;
  }

  case 'list': {
    const status = process.argv[3] ?? '';
    task.list(status);
    break;
  }


  default:
    console.log('Unknown command');
}
