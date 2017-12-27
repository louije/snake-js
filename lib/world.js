import Snake from './snake.js';
import Grid from './grid.js';
import Bait from './bait.js';
import Direction from './direction.js';
import { cssInt } from './util.js';

class World {
  constructor() {
    
    this.blockingWalls = true;
    this.speed = 120;

    this.size();

    this.score = 0;

    this.snake = new Snake(this);
    this.bait = new Bait(this);
    this.grid = new Grid(this);

    this.nextDirection = null;

    this.element = document.querySelector('.World');
    this.render();
  }

  size() {
    this.width = cssInt('--grid-width');
    this.height = cssInt('--grid-height');
    this.squareSize = cssInt('--grid-square-size');

    if (this.width * this.squareSize > window.innerWidth) {
      const newSize = Math.trunc((window.innerWidth - 20) / this.squareSize);
      this.width = newSize;
      this.height = newSize;

      document.body.style.setProperty("--grid-width", newSize);
      document.body.style.setProperty("--grid-height", newSize);
    }
  }

  render() {
    this.element.querySelector('.Score').textContent = this.score;
    this.grid.render();
  }

  start() {
    this.interval = setInterval(this.tick.bind(this), this.speed);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  tick() {
    if (this.nextDirection) {
      this.snake.setDirection(this.nextDirection);
    }

    const ahead = this.snake.ahead();
    const { baited, blocked, stuck } = this.checkMove(ahead);

    if (baited) {
      this.snake.grow();
      this.score = this.score + 1;
      this.bait = new Bait(this);
    } else if (blocked || stuck) {
      this.stop();
      return;
    } else {
      this.snake.move();
    }

    this.render();
  }

  tryDirection(dir) {
    const newDirection = new Direction(dir);
    if (this.snake.direction.allows(newDirection)) {
      this.nextDirection = newDirection;
    }
  }

  checkMove(pos) {
    let diagnostic = { baited: false, blocked: false, stuck: false };
    if (this.bait.isAt(pos)) {
      diagnostic.baited = true;
    }
    if (this.snake.isAt(pos)) {
      diagnostic.stuck = true;
    }
    if (this.blockingWalls && (pos[0] >= this.width || pos[1] >= this.height || pos[0] < 0 || pos[1] < 0)) {
      diagnostic.blocked = true;
    }
    return diagnostic;
  }
}

export default World;