const arr = '(()())((()))'
const stack = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] === "(") { stack.push("("); }  
    else if (arr[i] === ")" && stack.length > 0) { stack.pop(); }
    else { return console.log(123) };
    console.log(stack);
}
    
console.log(stack);