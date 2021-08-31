const array = `2
I am happy today
We want to win the first prize`.split('\n');


const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
array.shift();

const arr = array.map(x => x.split(" "));

for (let i = 0; i < array.length; i++) {
    console.log( arr[i].map(x => x.split("").reverse().join("")).join(" ") );
}