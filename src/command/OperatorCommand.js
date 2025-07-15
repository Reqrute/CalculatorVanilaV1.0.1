import { state } from '../state.js';
import { calculate } from '../math/calculate.js';
import { updateDisplay } from '../ui/display.js';

import Command from './Command.js';

export default class OperatorCommand extends Command {
  constructor(operator) {
    super();
    this.operator = operator;
    this.prevState = {};
  }

  execute() {
    this.prevState = { ...state };

    if (state.expression && state.currentInput) {
      state.expression = calculate(
        state.expression,
        state.currentInput,
        state.operator
      ).toString();
      state.currentInput = '';
    } else if (state.currentInput) {
      state.expression = state.currentInput;
      state.currentInput = '';
    }

    state.operator = this.operator;
    updateDisplay();
  }

  undo() {
    Object.assign(state, this.prevState);
    updateDisplay();
  }
}
