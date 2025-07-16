export default class CommandInvoker {
  constructor() {
    this.history = [];
  }

  execute(command) {
    command.execute();
    if (command.undo) this.history.push(command);
  }

  undo() {
    const last = this.history.pop();
    if (last) last.undo();
  }

  clear() {
    this.history = [];
  }
}
