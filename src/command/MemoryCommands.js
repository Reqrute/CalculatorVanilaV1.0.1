import { state } from '../state.js';
import { updateDisplay } from '../ui/display.js';

import Command from './Command.js';

export class MemoryClearCommand extends Command {
  constructor() {
    super();
    this.prevMemory = 0;
  }

  execute() {
    this.prevMemory = state.memory;
    state.memory = 0;
    updateDisplay();
  }

  undo() {
    state.memory = this.prevMemory;
    updateDisplay();
  }
}

export class MemoryRecallCommand extends Command {
  constructor() {
    super();
    this.prevInput = '';
  }

  execute() {
    this.prevInput = state.currentInput;
    state.currentInput = state.memory.toString();
    updateDisplay();
  }

  undo() {
    state.currentInput = this.prevInput;
    updateDisplay();
  }
}

export class MemoryAddCommand extends Command {
  constructor() {
    super();
    this.prevMemory = 0;
  }

  execute() {
    this.prevMemory = state.memory;
    const num = parseFloat(state.currentInput);
    if (!isNaN(num)) {
      state.memory += num;
    }
    updateDisplay();
  }

  undo() {
    state.memory = this.prevMemory;
    updateDisplay();
  }
}

export class MemorySubtractCommand extends Command {
  constructor() {
    super();
    this.prevMemory = 0;
  }

  execute() {
    this.prevMemory = state.memory;
    const num = parseFloat(state.currentInput);
    if (!isNaN(num)) {
      state.memory -= num;
    }
    updateDisplay();
  }

  undo() {
    state.memory = this.prevMemory;
    updateDisplay();
  }
}
