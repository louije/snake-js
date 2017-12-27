class Grid {
  constructor(world) {
    this.world = world;
    this.element = document.querySelector('.Grid');
    this.render();
  }

  dom() {
    const squares = this.world.width * this.world.height;
    const squaresRange = Array.from(Array(squares).keys());

    let dom = [];

    for (let iy = 0; iy < this.world.width; iy++) {
      for (let ix = 0; ix < this.world.height; ix++) {
        if (this.world.bait.isAt([ix, iy])) {
          dom.push(`<div class="Square Bait x-${ix} y-${iy}">🍎</div>`);
        } else if (this.world.snake.isAt([ix, iy])) {
          dom.push(`<div class="Square Snake x-${ix} y-${iy}">🐍</div>`);
        } else {
          dom.push(`<div class="Square x-${ix} y-${iy}">⬛</div>`);
        }
      }
    }
    return dom.join("");
  }

  render() {
    requestAnimationFrame( () => this.element.innerHTML = this.dom() );
  }
}

export default Grid;