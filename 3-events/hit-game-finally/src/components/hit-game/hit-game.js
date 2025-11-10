import './hit-game.css';

import goblinImage from './goblin.png';

export class HitGame {
  constructor(board) {
    if(typeof board === 'string') {
      board = document.querySelector(board);
    }
    this._board = board;
    this._renderBoard();
    this.messages = board.querySelector('.messages');
    this.goblinHoleIndex = 16;
    this.misses = 0;
    this.onBoardClick = this.onBoardClick.bind(this);
    this._board.addEventListener('click', this.onBoardClick);
  }

  _renderBoard() {
    for (let i = 0; i < 16; i++) {
      let hole = document.createElement("div");
      hole.classList.add("hole");
      hole.setAttribute("data-index", i);
      this._board.appendChild(hole);
    }
  }

  start() {
    this.goblin = new Goblin(this._board);
    this._goblinIntervalId = setInterval(() => {
      if(this.goblin.head.parentNode && this.goblinHoleIndex != 16) { 
        this.misses++; 
      }
      if (this.misses == 4) {
        this.goblin.head.removeEventListener(
          'click', this.goblin.onGoblinClick);
        this.goblin.head.remove();
        this.messages.textContent = '!!GAME OVER!!! You hit ' + 
          this.goblin.hits + ' time' + (this.goblin.hits==1?'':'s');
        clearInterval(this._goblinIntervalId);
        return;
      }
      this.goblinHoleIndex = Math.floor(Math.random()*15);
      this._board.querySelector(`[data-index="${ this.goblinHoleIndex }"]`)
        .appendChild(this.goblin.head);
      this.messages.textContent = 
        'Hits:' + this.goblin.hits + ' Misses:' + this.misses;
    }, 1000);
  }

  onBoardClick() {
    this._board.classList.toggle('hammer-down');
    this._timeout = setTimeout(() => {
      this._board.classList.toggle('hammer-down');
      clearTimeout(this._timeout);
    }, 100);
  }
}

class Goblin {
  constructor(board) {
    this.head = new Image();
    this.head.classList.add("goblin");
    this.head.src = goblinImage;
    this.head.alt = 'goblin';
    this.onGoblinClick = this.onGoblinClick.bind(this);
    this.head.addEventListener('click', this.onGoblinClick);
    this._board = board;
    this.hits = 0;
  }

  onGoblinClick() {
    this.hits++;
    this.head.remove();
  }
}


