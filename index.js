const array = `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`.split('\n');


// const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
array.shift();


const stack = [];

// const fun = {
//     pop: () => stack.pop() || -1,
//     size: () => stack.length,
//     empty: () => stack[0] ? 0 : 1,
//     top: () => stack[stack.length - 1] || -1,
//     push: (item) => {
//         stack.push(item.split(" ")[1]);
//         return '';
//     }
// }


// const fun = {
//     pop: function () { return stack.pop() || -1;},
//     size: function () { return stack.length; },
//     empty: function () {return stack[0] ? 0 : 1;},
//     top: function () { return stack[stack.length - 1] || -1; },
//     push: function (item) {
//         stack.push(item.split(" ")[1]);
//         return '';
//     }
// }


const fun = {
    pop () { return stack.pop() || -1;},
    size () { return stack.length; },
    empty () {return stack[0] ? 0 : 1;},
    top () { return stack[stack.length - 1] || -1; },
    push (item) {
        stack.push(item.split(" ")[1]);
        return '';
    }
}

const result = array.reduce((acc, v) => acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)), '');

console.log(result);
