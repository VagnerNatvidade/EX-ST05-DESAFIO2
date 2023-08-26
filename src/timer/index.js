import state from "./state.js";
import * as events from "./events.js";
import * as timer from "./timer.js";

export const start = (minutes, seconds) => {
  state.minutes = minutes; // recebe o valor de minutos passado na main para o estado
  state.seconds = seconds; // recebe o valor de segundos passado na main para o estado]

  timer.updateDisplay();

  events.registerControls();
  events.registerSounds();
};
