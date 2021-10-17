# GCD (9613번) [node.js, JavaScript] 

## 문제 설명
양의 정수 n개가 주어졌을 때, 가능한 모든 쌍의 GCD의 합을 구하는 프로그램을 작성하시오.
## 입력
첫째 줄에 테스트 케이스의 개수 t (1 ≤ t ≤ 100)이 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있다. 각 테스트 케이스는 수의 개수 n (1 < n ≤ 100)가 주어지고, 다음에는 n개의 수가 주어진다. 입력으로 주어지는 수는 1,000,000을 넘지 않는다.
## 출력
각 테스트 케이스마다 가능한 모든 쌍의 GCD의 합을 출력한다
### 의사코드 
1. 이중 반복문으로 만들수 있는 모든 숫자 조합을 추출합니다.
2. 두 숫자를 최대 공약수 gcd 함수에 인자로 넣고 최대공약수를 반환받습니다.
3. 반환값을 변수에 더하게되면 반복문이 끝나고 answer에 최대공약수 합이 저장되어집니다. 
4. 출력문이 많아지면 시간 초과 될수 있기 때문에 값을 문자열에 누적해서 더합니다.
5. 그렇게 하면 구하려는 모든 테스트 케이스의 최대공약수 합을 한번에 출력할 수 있습니다. 
### Code
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 
const caseNum = input.shift();
let result = '';

for (let i = 0; i < caseNum;i++){
    solution(input[i]);
}
console.log(result.trim());

function solution(str) {
    const tmpArr = str.split(" ").map(Number);
    const len = tmpArr.shift();
    tmpArr.sort((a, b) => a - b);

    let answer = 0;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            answer += gcd(tmpArr[i], tmpArr[j]);
        }
    }
    
    result += `${answer}\n`;
    return;
}

function gcd(min, max) {
  if (min % max) return gcd(max, min % max);
  else return max;
}
```