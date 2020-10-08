const Stack = require('./stack')

const validBrackets = (str) => {
    let stack = new Stack()
    if (str[0] === "]" || str[0] === "]" || str[0] === ")") {
        return false
    }
    for (let bracket of str) {
        let peek = stack.peek()
        if (bracket === "(" || bracket === "{" || bracket === "[") {
          stack.push(bracket);
        } 
        if (bracket === ")" && peek === "(") {
          stack.pop();
        }
        if (bracket === "}" && peek === "{") {
          stack.pop();
        }
        if (bracket === "]" && peek === "[") {
          stack.pop();
        }
    }
    console.log(stack)
    if (stack.isEmpty()) {
        return true
    }
    return false
}

console.log(validBrackets("{[]()}"));