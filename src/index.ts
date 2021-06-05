import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
// images
import PaddleSprite from "./images/paddle.png";
import BallSprite from "./images/ball.png";
// level and colors
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY,
} from "./setup";
// Helpers
import { createBricks } from "./helper";

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo("Game Over");
  gameOver = false;
}

function setGameWin(view: CanvasView) {
  view.drawInfo("You won!");
  gameOver = false;
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[]
  //   paddle: Paddle,
  //   ball: Ball
) {
  console.log("draw!");
  view.clear();
  view.drawBricks(bricks);

  requestAnimationFrame(() => gameLoop(view, bricks));
}

function startGame(view: CanvasView) {
  // Reset the game
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  // Create all bricks
  const bricks = createBricks();

  gameLoop(view, bricks);
}

// create a new view and intitialize the game with the start button
const view = new CanvasView("#playField");
view.initStartButton(startGame);
