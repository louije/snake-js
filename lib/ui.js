class UI {
  constructor(world) {
    this.world = world;
    document.addEventListener("keydown", this.keypress.bind(this));
  }

  keypress(e) {
    switch(e.key) {
      case "ArrowUp":
        e.stopPropagation();
        this.up()
        break;
      case "ArrowRight":
        e.stopPropagation();
        this.right()
        break;
      case "ArrowDown":
        e.stopPropagation();
        this.down()
        break;
      case "ArrowLeft":
        e.stopPropagation();
        this.left()
        break;
      case "Escape":
        e.stopPropagation();
        this.stop()
        break;
      case " ":
        e.stopPropagation();
        if (this.world.this) {
          this.stop();
          return;
        }
        this.tick()
        break;
      case "Enter":
        e.stopPropagation();
        if (this.world.interval) {
          this.stop();
          return;
        }
        this.start();
        break;
    }
  }

  up() {
    this.world.tryDirection("up");
  }
  right() {
    this.world.tryDirection("right");
  }
  down() {
    this.world.tryDirection("down");
  }
  left() {
    this.world.tryDirection("left");
  }

  start() {
    this.world.start();
  }
  stop() {
    this.world.stop();
  }
  tick() {
    this.world.tick();
  }
}

export default UI;