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

    this.onHeadClick = this.onHeadClick.bind(this);
  }

  _renderBoard() {
    this.board.classlist.add('board');
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
    this.board.addEventListener('click', this.onBoardClick());
    setInterval( () => {
      let goblinHoleIndex = Math.floor(Math.random()*15);
      board.querySelector(`[data-index="${ goblinHoleIndex }"]`)
      .appendChild(this._goblinHead);
    }, 1000);
  }

  onsBoardClick() {
    this.board.classlist.toggle('hammer-down');
    if(this._timeout) {
      return;
    }
    this._timeout = setTimeout(() => {
      this.board.classlist.toggle('hammer-down');
      if (this._goblinHead.matches(':hover')) {
        this.hits++;
      } else {
        this._miss();
      }
    }, 200);
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
    this.board.removeEventListener('click', this.oBoardClick);
    this._gameOver = document.createElement('div')
      .appendTextNode(`!!!GAME OVER!!! \n You hit ${this._hits} times`);
    this._gameOver.classlist.add('game-over');
    this.board.appendChild(this.gameOver);

  }

}
