class Stack {
  constructor() {
    this.arr = [];
  }
  push(val) {
    this.arr.push(val);
  }
  pop() {
    this.arr.pop();
  }
  peek() {
    let last = this.arr.length - 1;
    return this.arr[last];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
}
