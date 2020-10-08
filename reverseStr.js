const Stack = require('./stack')

const reverseStr = (str) => {
    let stack = new Stack()
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        stack.push(char)
    }
    console.log(stack)
    let output = ""
    while (!stack.isEmpty()) {
        let elem = stack.pop()
        output += elem
    }
    return output
}

console.log(reverseStr("Farts"))