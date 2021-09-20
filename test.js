const bigint = 1n;
const number = 2;

// 숫자를 bigint로
console.log(bigint + BigInt(number)); // 3n

// bigint를 숫자로
console.log(Number(bigint) + number); // 3