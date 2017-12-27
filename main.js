import UI from "./lib/ui.js";
import World from "./lib/world.js";
import TestRunner from "./test/runner.js";

const world = new World();
window.ui = new UI(world);
window.runner = new TestRunner(world);
