const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); //입력메세지 받음

input.shift();

const queue = [];

const fun = {
  pop: function () {
    return queue.shift() || -1;
  },
  size: function () {
    return queue.length;
  },
  empty: function () {
    return queue[0] ? 0 : 1;
  },
  front: function () {
    return queue[0] || -1;
    },
  back: function () {
    return queue[queue.length-1] || -1;
  },
  push: function (item) {
    queue.push(item.split(" ")[1]);
    return "";
  },
};

const result = input.reduce(
  (acc, v) => acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)),
  ""
);

console.log(result);