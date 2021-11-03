// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input=[];
// rl.on("line", function (x) {
//   input.push(x)
  
// }).on("close", function () {
//     solution(input);
//   process.exit();
// });
const input = `4 6
a t c i s w`.split("\n");
const consonant = ['a', 'e', 'i', 'o', 'u'];
let result = '';
const output = [];
const [L, C] = input[0].split(' ');
const alpha = input[1].split(' ').sort();

re_alpha(0, 0, 0, 0);
console.log(result.trimEnd());

function re_alpha(cnt, index, cons_count, vowel_count) {
    // 자음, 모음 조건 충족 할때 result에 추가
    if (cnt == L) {
        if (cons_count >= 1 && vowel_count >= 2) {
            result += `${output.join('')}\n`;
        }
        return;
    }
    for (let i = index; i < C; i++) {
        output.push(alpha[i]);
        if (consonant.includes(alpha[i])) {
            re_alpha(cnt + 1, i + 1, cons_count+1, vowel_count);
        } else {
            re_alpha(cnt + 1, i + 1, cons_count, vowel_count+1);
        }
        output.pop();
    }
    return;
}

