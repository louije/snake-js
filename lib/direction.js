class Direction {
  constructor(dir) {
    switch (dir) {
      case "up":
        this.vector = [0, -1];
        break;
      case "right":
        this.vector = [1, 0];
        break;
      case "down":
        this.vector = [0, 1];
        break;
      case "left":
        this.vector = [-1, 0];
        break;
      default:
        this.vector = [1, 0];
    }
  }

  addTo(point) {
    return [point[0] + this.vector[0], point[1] + this.vector[1]];
  }

  allows(newDirection) {
    if (Math.abs(newDirection.vector[0]) === Math.abs(this.vector[0]) &&
        Math.abs(newDirection.vector[1]) === Math.abs(this.vector[1])) {
      return false;
    }
    return true;
  }
}

export default Direction;