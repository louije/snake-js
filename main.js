import UI from "./lib/ui.js";
import World from "./lib/world.js";

const world = new World();
window.ui = new UI(world);
