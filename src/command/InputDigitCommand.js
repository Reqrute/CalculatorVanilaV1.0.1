import { state } from '../state.js';
import { updateDisplay } from '../ui/display.js';

import Command from './Command.js';

export default class InputDigitCommand extends Command {
  constructor(digit) {
    super();
    this.digit = digit;
    this.prev = '';
  }

  execute() {
    this.prev = state.currentInput;
    if (this.digit === '.' && state.currentInput.includes('.')) return;
    state.currentInput += this.digit;
    updateDisplay();
  }

  undo() {
    state.currentInput = this.prev;
    updateDisplay();
  }
}
