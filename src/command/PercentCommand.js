import { state } from '../state.js';
import { updateDisplay } from '../ui/display.js';
import { percent } from '../math/calculate.js';

import Command from './Command.js';

export default class PercentCommand extends Command {
  constructor() {
    super();
    this.prevState = { ...state };
  }

  execute() {
    this.prevState = { ...state };
    state.currentInput = percent(state.currentInput);
    updateDisplay();
  }

  undo() {
    Object.assign(state, this.prevState);
    updateDisplay();
  }
}
