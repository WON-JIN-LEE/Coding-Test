
const input = `6
40 20 10 30 20 50`.split("\n");

solution(input);

function solution(input) {
    const len = Number(input[0]);
    const numbers = input[1].split(" ").map(Number);
    const DP = Array.from({ length: len }, () => 0);
 
for (let i = 0; i < len; i++) {
        DP[i] = [1, [numbers[i]]];
console.log(DP);    
        

    for (let j = 0; j < i; j++) {
            if (DP[i][0] < DP[j][0] + 1 && numbers[i] > numbers[j]) {
                DP[i][1] = [...DP[j][1], numbers[i]];
                DP[i][0] = DP[j][0] + 1;
            }
        }
console.log(DP);    
}
    

    let maxValue = DP[0][0];
    let temp = DP[0][1];

    for (let i = 1; i < len; i++) {
        if (maxValue < DP[i][0]) {
            maxValue = DP[i][0];
            temp = DP[i][1];
        }
    }
    console.log(temp.length);
    console.log(temp.join(' '));
}