import {
  MemoryAddCommand,
  MemorySubtractCommand,
  MemoryRecallCommand,
  MemoryClearCommand,
} from './command/MemoryCommands.js';
import InputDigitCommand from './command/InputDigitCommand.js';
import OperatorCommand from './command/OperatorCommand.js';
import EqualsCommand from './command/EqualsCommand.js';
import ClearCommand from './command/ClearCommand.js';
import ToggleSignCommand from './command/ToggleSignCommand.js';
import PercentCommand from './command/PercentCommand.js';
import AdvancedMathCommand from './command/AdvancedMathCommand.js';
import CommandInvoker from './core/CommandInvoker.js';
import './theme.js';

const invoker = new CommandInvoker();

document.querySelector('.buttons').addEventListener('click', (e) => {
  handleButtonClick(e);
});

document.querySelector('.memory-buttons').addEventListener('click', (e) => {
  handleButtonClick(e);
});

function handleButtonClick(e) {
  const target = e.target;
  if (!target.classList.contains('btn')) return;

  const { value, action } = target.dataset;

  if (value !== undefined) {
    invoker.execute(new InputDigitCommand(value));
  } else if (action) {
    let command;
    switch (action) {
      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
        command = new OperatorCommand(action);
        break;
      case 'equals':
        command = new EqualsCommand();
        break;
      case 'clear':
        command = new ClearCommand();
        break;
      case 'toggle-sign':
        command = new ToggleSignCommand();
        break;
      case 'percent':
        command = new PercentCommand();
        break;
      case 'square':
        command = new AdvancedMathCommand('square');
        break;
      case 'cube':
        command = new AdvancedMathCommand('cube');
        break;
      case 'power':
        command = new AdvancedMathCommand('power');
        break;
      case 'ten-power':
        command = new AdvancedMathCommand('ten-power');
        break;
      case 'inverse':
        command = new AdvancedMathCommand('inverse');
        break;
      case 'sqrt':
        command = new AdvancedMathCommand('sqrt');
        break;
      case 'cbrt':
        command = new AdvancedMathCommand('cbrt');
        break;
      case 'root':
        command = new AdvancedMathCommand('root');
        break;
      case 'factorial':
        command = new AdvancedMathCommand('factorial');
        break;
      case 'mc':
        command = new MemoryClearCommand();
        break;
      case 'mr':
        command = new MemoryRecallCommand();
        break;
      case 'm+':
        command = new MemoryAddCommand();
        break;
      case 'm-':
        command = new MemorySubtractCommand();
        break;
      default:
        return;
    }
    invoker.execute(command);
  }
}
