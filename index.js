var n = 118372;

console.log(String(n));
console.log(String(n).split(''));
console.log(String(n).split('').sort());
console.log(String(n).split('').sort().reverse());
console.log(typeof String(n).split('').sort().reverse().join(''));
console.log(parseInt(String(n).split('').sort((a, b) => a - b).join('')));

var r = [1, 2, 7, 4, 3];
console.log(r.sort());

