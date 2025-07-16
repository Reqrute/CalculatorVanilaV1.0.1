import { state } from '../state.js';
import { updateDisplay } from '../ui/display.js';

import Command from './Command.js';

export default class ClearCommand extends Command {
  constructor() {
    super();
    this.prevState = {};
  }

  execute() {
    this.prevState = { ...state };
    state.currentInput = '';
    state.expression = '';
    state.operator = null;
    state.result = null;
    updateDisplay();
  }

  undo() {
    Object.assign(state, this.prevState);
    updateDisplay();
  }
}
