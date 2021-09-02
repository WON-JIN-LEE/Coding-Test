// const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// array.shift();


const array = `(())())
(((()())() 
(()())((()))  
((()()(()))(((())))()   
()()()()(()()())()
(()((())()(`.split("\n");
const fun = function (arr) {
    const stack = [];
    console.log(arr[arr.length - 1])
    if (arr[0] === ")" || arr[arr.length - 1] === "(") return "NO";


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(") { stack.push("("); }
        else if (stack.length > 0) { stack.pop(); }
        else { return "NO"; }
    }
    return stack.length ? "NO" : "YES";
};

const answer = array.reduce((sum, cur)=> sum + `${fun(cur)}\n`, "");

console.log(answer);