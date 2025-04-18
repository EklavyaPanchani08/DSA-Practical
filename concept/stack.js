class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop()); // 20
console.log(myStack.peek()); // 10
