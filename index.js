// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); //입력메세지 받음
const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`.split("\n"); //입력메세지 받음

const [N, K] = input.shift().split(" ");

const coin = function (input) {
    input = input.map(Number);
    let k = K;
    let count = 0;

    for (let i = N - 1; i >= 0; i--){

        const v = input[i];
        const quotient = Math.floor(k / v);
        if (quotient === 0) { continue; }
        
        
        count += quotient;
            k = k % v;
        
        
        if(k === 0) break;

    }

    console.log(count);

}
coin(input);