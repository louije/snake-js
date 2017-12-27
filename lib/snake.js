import Direction from './direction.js';
import { p } from './util.js';

class Snake {
  constructor(world) {
    this.world = world;
    this.position = this.newPosition();
    this.direction = new Direction('right');
  }

  newPosition() {
    let pos = [];
    pos.push(p(Math.trunc(this.world.width / 2), Math.trunc(this.world.height / 2)));
    pos.unshift(p(pos[0][0] - 1, pos[0][1]));
    return pos;
  }

  head() {
    return this.position[this.position.length - 1];
  }

  ahead() {
    return this.direction.addTo(this.head());
  }

  move() {
    const oldTail = this.position.shift();
    this.position.push(this.ahead());
  }

  grow() {
    this.position.push(this.ahead());
  }

  setDirection(dir) {
    if (this.direction.allows(dir)) {
      this.direction = dir;
    }
  }

  isAt(point) {
    for (let pos of this.position) {
      if (pos[0] === point[0] && pos[1] === point[1]) return true;
    }
    return false;
  }
}

export default Snake;