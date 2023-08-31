import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";

export const toggleRunning = () => {
  state.isRunning = !state.isRunning;

  timer.countDown();
};

export const reset = () => {
  state.isRunning = false;

  timer.updateDisplay();
};

export const moreFiveMinutes = () => {
  state.minutes = Number(state.minutes) + 5;
  state.isRunning = false;

  timer.updateDisplay();
};

export const minusFiveMinutes = () => {
  state.minutes = Number(state.minutes) - 5;
  state.isRunning = false;

  if (state.minutes < 0) {
    state.minutes = 0;
    return;
  }

  timer.updateDisplay();
};

export const toggleMusic = () => {
  state.isMute = !state.isMute;
  let btnSound = event.target.id;

  if (state.isMute == false) {
    if (btnSound == "tree") {
      sounds.tree.play();
    } else if (btnSound == "cloudRain") {
      sounds.cloudRain.play();
    } else if (btnSound == "storeFront") {
      sounds.storeFront.play();
    } else if (btnSound == "flame") {
      sounds.flame.play();
    }
  } else {
    sounds.tree.pause();
    sounds.flame.pause();
    sounds.cloudRain.pause();
    sounds.storeFront.pause();
  }

  console.log(state.isMute);
  console.log(btnSound);
};
