import { state } from '../state.js';
import { calculate } from '../math/calculate.js';
import { updateDisplay } from '../ui/display.js';

import Command from './Command.js';

export default class EqualsCommand extends Command {
  constructor() {
    super();
    this.prevState = {};
  }

  execute() {
    if (!state.operator || !state.currentInput) return;

    this.prevState = { ...state };

    const result = calculate(
      state.expression,
      state.currentInput,
      state.operator
    );
    state.expression = result.toString();
    state.result = result;
    state.currentInput = '';
    state.operator = null;

    updateDisplay();
  }

  undo() {
    Object.assign(state, this.prevState);
    updateDisplay();
  }
}
