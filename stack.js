export default class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    if (this.data.length == 0) {
      return null;
    }
    return this.data[this.data.length - 1];
  }
}
