import './hit-game.css';

import goblinImage from './gobin.png';

class HitGame {
  constructor(board) {
    if(typeof board === 'string') {
          board = document.querySelector(board);
        }

    this._board = board;
    this._renderBoard();

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
    this._goblinHead = document.createElement("img");
    this._goblinHead.classList.add("goblin");
    this._goblinHead.setAttribute("src","img/goblin.png");
    this._goblinHead.addEventListener('click', this.onHeadClick());
    setInterval( () => {
      let goblinHoleIndex = Math.floor(Math.random()*15);
      board.querySelector(`[data-index="${ goblinHoleIndex }"]`)
      .appendChild(this._goblinHead);
    }, 1000);
  }

  onHeadClick() {
    this.board.classlist.toggle('hammer-down');
    setTimeout<
  }
