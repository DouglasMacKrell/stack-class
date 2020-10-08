class Stack {
  constructor() {
    this.arr = [];
  }

  // O(1) Constant Time
  push(val) {
    this.arr.push(val);
  }
  // O(1) Constant Time
  pop() {
    return this.arr.pop();
  }
  // O(1) Constant Time
  peek() {
    let last = this.arr.length - 1;
    return this.arr[last];
  }
  // O(1) Constant Time
  isEmpty() {
    return this.arr.length === 0;
  }
}

module.exports = Stack;
