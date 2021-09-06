const input = require("fs").readFileSync("/dev/stdin").toString(); //입력메세지 받음


const main = (input) => {
    const [N, K] = input.split(" ").map(x=>Number(x));
    const arr = Array.from({length : N},((_, i) => i + 1));

    let answer = "<";

    while (arr.length) {
        for (let i = 0; i < K; i++) {
            arr.push(arr.shift());
        }

        if (arr.length === 1) {
            answer += `${arr.pop()}>`;
        } else {
            answer += `${arr.pop()}, `;
        }
    }
    console.log(answer);
};

main(input);