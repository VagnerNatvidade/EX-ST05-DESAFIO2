import { controls } from "./elements.js";
import { sounds } from "./elements.js";
import * as actions from "./actions.js";

export const registerControls = () => {
  controls.addEventListener("click", () => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
};

export const registerSounds = () => {
  sounds.addEventListener("click", () => {
    const sound = event.target.dataset.sound;

    if (typeof actions[sound] != "function") {
      return;
    }

    actions[sound]();
  });
};