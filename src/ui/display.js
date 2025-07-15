import { state } from '../state.js';

const display = document.getElementById('display');

const OPERATOR_SYMBOLS = {
  add: '+',
  subtract: '−',
  multiply: '×',
  divide: '÷',
  power: '^',
  root: 'y√x',
};

export function updateDisplay() {
  let displayText = '';

  if (state.expression) {
    displayText += state.expression;
    if (state.operator) {
      displayText += OPERATOR_SYMBOLS[state.operator] || '';
    }
  }

  if (state.currentInput) {
    displayText += state.currentInput;
  }

  if (!displayText) {
    displayText = '0';
  }

  display.textContent = displayText;
}
