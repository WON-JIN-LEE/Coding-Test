# (8958번) [node.js, JavaScript] 

## 문제 설명
"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.

## 출력
각 테스트 케이스마다 점수를 출력한다.

### 의사코드 
1. 문자열 요소가 O라면 count에 1을 계속 더해줍니다.
2. X라면 count를 0을 할당해 리셋해줍니다.
3. 문자열의 점수 count 값을 기억하기 위해서 result 배열에 추가합니다.

### Code
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

solution(input);
    
function solution(inputs) {
    const N = +inputs.shift();
    const result = Array.from({length:N}, ()=>[]);
    for (let i = 0; i < N; i++){
        let count = 0;
        const strLen= inputs[i].length;
        for (let j = 0; j < strLen; j++){
            inputs[i][j] === "O" ? count++ : count = 0;
            result[i].push(count);
        }
    }
    const answer = result.map(arr => {
         return arr.reduce((sum, cur) => sum + cur, 0);
    })
    console.log(answer.join("\n"));
}
```
