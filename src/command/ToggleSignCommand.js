import { state } from '../state.js';
import { updateDisplay } from '../ui/display.js';

import Command from './Command.js';

export default class ToggleSignCommand extends Command {
  constructor() {
    super();
    this.prev = '';
  }

  execute() {
    this.prev = state.currentInput;
    if (state.currentInput.startsWith('-')) {
      state.currentInput = state.currentInput.slice(1);
    } else if (state.currentInput !== '') {
      state.currentInput = '-' + state.currentInput;
    }
    updateDisplay();
  }

  undo() {
    state.currentInput = this.prev;
    updateDisplay();
  }
}
