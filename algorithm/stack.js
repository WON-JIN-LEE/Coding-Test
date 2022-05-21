class Stack {
  constructor() {
    this._arr = [];
  }

  push(item) {
    this._arr.push(item);
  }

  pop(item) {
    return this._arr.pop();
    }
    
    peek() {
        return this._arr[this._arr.length - 1];
    }

}

const stack = new Stack();

stack.push(3);
stack.push(2);
stack.push(1);

console.log(stack.peek())

stack.pop();
console.log(stack.peek());
