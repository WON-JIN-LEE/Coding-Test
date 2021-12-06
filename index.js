// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input=[];
// rl.on("line", function (x) {
//     input.push(x);
  
// }).on("close", function () {
//     solution(input);
//   process.exit();
// });
const input = `1 1 1
2 2 2
10 4 6
50 50 50
-1 7 18
-1 -1 -1`.split("\n");
input.pop();
const hash = {};
const w = (a, b, c) => {
  let key = `${a},${b},${c}`

     if (hash[key]) return hash[key];
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
  if (a < b && b < c) {
    const retval = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    hash[key] = retval;
    return retval;
  }

  const retval = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
  hash[key] = retval;
  return retval;
};





console.log(w(250, 20, 20));
