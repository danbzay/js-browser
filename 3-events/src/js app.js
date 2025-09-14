import { HitGame } from './components/hit-game/hit-game/';

const board = document.createElement('div');
document.body.appendChild(board);
const game = new HitGame(board);
game.start();

