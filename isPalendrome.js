const Stack = require("./stack");

const isPalindrome = (str) => {
  let palindrome = false;
  let pattern = /[A-Za-z]/;
  let stack = new Stack();
  let forward = "";
  let reverse = "";
  for (let char of str) {
    if (pattern.test(char)) {
      forward += char.toLowerCase();
      stack.push(char.toLowerCase());
    }
  }
  while (!stack.isEmpty()) {
    let elem = stack.pop();
    if (pattern.test(elem)) {
      reverse += elem;
    }
  }
  console.log(forward);
  console.log(reverse);
  if (forward === reverse) {
    palindrome = true;
  }
  return palindrome;
};

console.log(isPalindrome("No lava on Avalon. No lava, no Avalon"));
