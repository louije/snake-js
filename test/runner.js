export default class TestRunner {
  constructor(world) {
    this.world = world;
  }

  speedRun() {
    const start = new Date().getTime();
    const laps = [];

    for (let i = 0; i < 2500; i++) {
      const lapStart = new Date().getTime();
      this.world.tryDirection("right");
      this.world.tick();
      this.world.tick();
      this.world.tryDirection("down");
      this.world.tick();
      this.world.tick();
      this.world.tryDirection("left");
      this.world.tick();
      this.world.tick();
      this.world.tryDirection("up");
      this.world.tick();
      this.world.tick();
      const lapEnd = new Date().getTime();
      laps.push(lapEnd - lapStart);
    }
    const end = new Date().getTime();
    const total = laps.reduce( (sum, lap) => sum + lap, 0);
    const average = total / laps.length;
    console.info(`Duration: ${end - start}. Total: ${total}. Average: ${average}`);
  }
}