import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";
import { btnSounds } from "./elements.js";

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

export const togglePlay = () => {
  state.isMute = !state.isMute;

  let btnSoundClass = event.target;
  let id = btnSoundClass.id;

  if (id == "tree") {
    if (state.isMute == false) {
      sounds.tree.play();
    } else {
      sounds.tree.pause();
    }
  } else if (id == "cloundRain") {
    if (state.isMute == false) {
      sounds.cloundRain.play();
    } else {
      sounds.cloundRain.pause();
    }
  } else if (id == "storeFront") {
    if (state.isMute == false) {
      sounds.storeFront.play();
    } else {
      sounds.storeFront.pause();
    }
  } else if (id == "flame") {
    if (state.isMute == false) {
      sounds.flame.play();
    } else {
      sounds.flame.pause();
    }
  }
};
