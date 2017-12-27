class Grid {
  constructor(world) {
    this.world = world;
    this.element = document.querySelector('.Grid');

    this.emptyGrid = this.newGrid();
    Object.freeze(this.emptyGrid);

    this.render();
  }

  squareEmpty(x, y) { return `<div class="Square Empty x-${x} y-${y}"></div>`; }
  squareSnake(x, y) { return `<div class="Square Snake x-${x} y-${y}"></div>`; }
  squareBait(x, y)  { return `<div class="Square Bait  x-${x} y-${y}"></div>`; }

  newGrid() {
    let elements = [];
    for (let iy = 0; iy < this.world.width; iy++) {
      for (let ix = 0; ix < this.world.height; ix++) {
        elements.push(this.squareEmpty(ix, iy));
      }
    }
    return elements;
  }

  quickDom({ width, snakePosition, baitPosition }) {    
    let dom = Object.assign([], this.emptyGrid);
    for (let pos of snakePosition) {
      let idx = pos[1] * width + pos[0];
      dom[idx] = this.squareSnake(pos[0], pos[1]);
    }
    const baitIdx = baitPosition[1] * width + baitPosition[0];
    dom[baitIdx] = this.squareBait(baitPosition[0], baitPosition[1]);

    return dom.join("");
  }

  render() {
    const settings = {
      width: this.world.width,
      snakePosition: this.world.snake.position,
      baitPosition: this.world.bait.position
    }
    const dom = this.quickDom(settings);
    requestAnimationFrame( () => this.element.innerHTML = dom);
  }
}

export default Grid;