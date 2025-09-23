import './hit-game.css';

import goblinImage from './goblin.png';

export class HitGame {
  constructor(board) {
    if(typeof board === 'string') {
      board = document.querySelector(board);
    }


    this._board = board;
    this._renderBoard();
    this._hits = 0;
    this._misses = 0;

    this.onBoardClick = this.onBoardClick.bind(this);
  }

  _renderBoard() {
    this._board.classList.add('board');
    for (let i = 0; i < 16; i++) {
      let hole = document.createElement("div");
      hole.classList.add("hole");
      hole.setAttribute("data-index", i);
      this._board.appendChild(hole);
    }
  }

  start() {
    this._goblinHead = new Image();
    this._goblinHead.classList.add("goblin");
    this._goblinHead.src = goblinImage;
    this._board.addEventListener('click', this.onBoardClick);
    this._goblinIntervalId = setInterval( () => {
      let goblinHoleIndex = Math.floor(Math.random()*15);
      this._board.querySelector(`[data-index="${ goblinHoleIndex }"]`)
      .appendChild(this._goblinHead);
    }, 1000);
  }

  onBoardClick() {
    this._board.classList.toggle('hammer-down');
    if (this._goblinHead.matches(':hover')) {
      this._hits++;
    } else {
      this._miss();
    }
    this._timeout = setTimeout(() => {
      this._board.classList.toggle('hammer-down');
      clearTimeout(this._timeout);
    }, 100);
  }

  _miss() {
    if (this._misses == 4) {
      this._gameOver();
    } else {
      this._misses++; 
    }
  }

  _gameOver() {
    this._goblinHead.remove();
    clearInterval(this._goblinIntervalId);
    this._board.removeEventListener('click', this.onBoardClick);
    this._gameOverDiv = document.createElement('div');
    this._gameOverDiv.appendChild(document.createTextNode(
      `!!!GAME OVER!!! \n You hit ${this._hits} time${this._hits==1?'':'s'}`));
    this._gameOverDiv.classList.add('game-over');
    this._board.appendChild(this._gameOverDiv);

  }

}
