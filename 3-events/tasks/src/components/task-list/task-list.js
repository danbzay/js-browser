import './task-list.css';

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
    this._pinnedTasksList = element.querySelector('.pinned-tasks-list');
    
    this._allTasks = [];
    this._pinnedTasks = [];

    this._allTasksList.addEventListener('click', this.onAllTaskClick);
    this._pinnedTasksList.addEventListener('click', this.onPinTaskClick);
  }

  filterHandler(text) {
    this._renderItems(this._allTasks.filter((task) => {
      const clean = text.trim().toLowerCase();
      const taskName = task.textContent.toLowerCase();
      return taskName.includes(clean);
    }));
  }

  submitHandler(text) {
    const task = this._allTasksList
      .appendChild(document.createElement('li'));
    task.appendChild(document.createTextNode(text));
    this._allTasks.push(task);
  }

  _renderItems(items) {
    this._allTasksList.querySelectorAll('li').forEach((e) => {
      e.classList.add('hidden');
    });
    if (!items || !this._allTasksList) return;
    items.forEach(e => e.classList.remove('hidden'));
  }

  _pinTask(task) {
    this._pinnedTasks.push(task);
    this._allTasks.splice(this._allTasks.findIndex(i => i === task));
    this._pinnedTasksList.appendChild(task);
  }

  _unpinTask(task) {
    this._allTasks.push(task);
    this._pinnedTasks.splice(this._pinnedTasks.findIndex(i => i === task));
    this._allTasksList.appendChild(task);
  }

  onAllTaskClick(e) {

    console.log(e.currentTarget);
    console.log(e.target);
      
    this._pinTask(e.target);
  }

  onPinTaskClick(e) {
    console.log(e.currentTarget);
    console.log(e.target);

    this._unpinTask(e.target);

  }
  
}
