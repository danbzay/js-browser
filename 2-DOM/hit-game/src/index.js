import "./css/style.css";
import goblinImage from './img/goblin.png';

document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector(".board");
  for (let i = 0; i < 16; i++) {
    let hole = document.createElement("div");
    hole.classList.add("hole");
    hole.setAttribute("data-index", i);
    board.appendChild(hole);
  }
  const goblin = document.createElement("img");
  goblin.classList.add("goblin");
  goblin.src = goblinImage;
  goblin.setAttribute("alt","G");
  setInterval( () => {
    let goblinHoleIndex = Math.floor(Math.random()*15);
    board.querySelector(`[data-index="${ goblinHoleIndex }"]`)
    .appendChild(goblin);
  }, 1000);
});
