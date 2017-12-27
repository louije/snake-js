class Bait {
  constructor(world) {
    this.world = world;
    this.position = this.newPosition();
  }

  newPosition() {
    let x, y;
    do {
      x = Math.trunc(Math.random() * this.world.width);
      y = Math.trunc(Math.random() * this.world.height);
    } while (this.world.snake.isAt([x, y]));

    return [x, y];
  }

  isAt(point) {
    if (this.position[0] === point[0] && this.position[1] === point[1]) return true;
    return false;
  }
}

export default Bait;