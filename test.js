// const input =
// require("fs").readFileSync("/dev/stdin").toString().split("\n"); 입력메세지 받음
const input = `5
3 1 4 3 2`.split("\n"); //입력메세지 받음

function solution(arr) {
    let dp = Array.from({
        length: 10001
    }, () => 0);
    const m = arr[1];
    const numCoin = arr[2]
        .split(" ")
        .map(Number);

    dp[0] = 1;

    for (let i = 0; i < arr[0]; i++) {
        for (let x = numCoin[i]; x <= m; x++) {

            dp[x] = dp[x] + dp[x - numCoin[i]];
        }
    }
    console.log(dp[m]);

}

solution(input);
