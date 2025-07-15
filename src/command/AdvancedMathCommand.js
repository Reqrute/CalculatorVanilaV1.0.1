import { state } from '../state.js';
import { updateDisplay } from '../ui/display.js';
import {
  square,
  cube,
  power,
  tenPower,
  inverse,
  sqrt,
  cbrt,
  root,
  factorial,
} from '../math/calculate.js';

import Command from './Command.js';

class AdvancedMathCommand extends Command {
  constructor(operation) {
    super();
    this.operation = operation;
    this.prevState = { ...state };
    this.result = null;
  }

  execute() {
    this.prevState = { ...state };

    try {
      let inputValue =
        state.currentInput !== '' ? state.currentInput : state.result;
      let num = parseFloat(inputValue);

      if (isNaN(num) && this.operation !== 'factorial') {
        throw new Error('Invalid input');
      }

      switch (this.operation) {
        case 'square':
          this.result = square(num);
          break;
        case 'cube':
          this.result = cube(num);
          break;
        case 'power':
          if (!state.expression) {
            state.expression = num.toString();
            state.currentInput = '';
            state.operator = 'power';
            updateDisplay();
            return;
          }
          this.result = power(parseFloat(state.expression), num);
          break;
        case 'ten-power':
          this.result = tenPower(num);
          break;
        case 'inverse':
          this.result = inverse(num);
          break;
        case 'sqrt':
          this.result = sqrt(num);
          break;
        case 'cbrt':
          this.result = cbrt(num);
          break;
        case 'root':
          if (!state.expression) {
            state.expression = num.toString();
            state.currentInput = '';
            state.operator = 'root';
            updateDisplay();
            return;
          }
          this.result = root(parseFloat(state.expression), num);
          break;
        case 'factorial':
          this.result = factorial(num);
          break;
        default:
          throw new Error('Unknown operation');
      }

      state.currentInput = this.result.toString();
      state.expression = '';
      state.operator = null;
      updateDisplay();
    } catch (error) {
      state.currentInput = 'Error';
      updateDisplay();
      console.error(error);
    }
  }

  undo() {
    Object.assign(state, this.prevState);
    updateDisplay();
  }
}

export default AdvancedMathCommand;
