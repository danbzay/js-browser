import './task-list.css';

class Task {
  constructor(name) {
    this.node = document.createElement('li');
    this.node.appendChild(document.createTextNode(name));
    this.pinned = false;
  }
}

export class TaskList {
  constructor(element) {
    if(typeof element === 'string') {
      element = document.querySelector(element);
    }
    
    this.filterHandler = this.filterHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.onAllTaskClick = this.onAllTaskClick.bind(this);
    this.onPinTaskClick = this.onPinTaskClick.bind(this);
    
    this._allTasksList = element.querySelector('.all-tasks-list');
    this._noTasksFound = this._allTasksList.querySelector('span');
    this._pinnedTasksList = element.querySelector('.pinned-tasks-list');
    this._noPinnedTasksFound = this._pinnedTasksList.querySelector('span');
    
    this._tasks = [];
    this._inputText ='';

    this._allTasksList.addEventListener('click', this.onAllTaskClick);
    this._pinnedTasksList.addEventListener('click', this.onPinTaskClick);
  }

  filterHandler(text) {
    this._renderItems(this._allTasksList, this._tasks.filter((task) => {
      if (task.pinned === true) return;
      const clean = text.trim().toLowerCase();
      const taskName = task.node.textContent.toLowerCase();
      return taskName.includes(clean);
      this._inputText = text;
    }));
  }

  _renderItems(list, items) {
    if (!items.length) {
      list.querySelector('span').classList.remove('hidden');
      return;
    }
    list.querySelector('span').classList.add('hidden');
    list.querySelectorAll('li').forEach((e) => {
      e.classList.add('hidden');
    });
    items.forEach(t => t.node.classList.remove('hidden'));
  }

  submitHandler(text) {
    const task = new Task(text);
    this._allTasksList.appendChild(task.node);
    this._tasks.push(task);
    this._inputText = '';
  }

  onAllTaskClick(e) {
    if (e.target.tagName != 'LI') return;
    const task = this._tasks.find(t => t.node == e.target);
    task.pinned = true;
    this._pinnedTasksList.appendChild(task.node);
    this._renderItems(this._pinnedTasksList, this._tasks.filter(t => t.pinned));
    this.filterHandler(this._inputText);
  }

  onPinTaskClick(e) {
    if (e.target.tagName != 'LI') return;
    const task = this._tasks.find(t => t.node == e.target);
    task.pinned = false;
    this._allTasksList.appendChild(task.node);
    this._renderItems(this._pinnedTasksList, this._tasks.filter(t => t.pinned));
    this.filterHandler(this._inputText);
  }
  
}
