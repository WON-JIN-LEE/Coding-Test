# LCS (9251번) [node.js, JavaScript] 

## 문제 설명
LCS(Longest Common Subsequence, 최장 공통 부분 수열)문제는 두 수열이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 문제이다.

예를 들어, ACAYKP와 CAPCAK의 LCS는 ACAK가 된다.

## 입력
첫째 줄과 둘째 줄에 두 문자열이 주어진다. 문자열은 알파벳 대문자로만 이루어져 있으며, 최대 1000글자로 이루어져 있다.

## 출력
첫째 줄에 입력으로 주어진 두 문자열의 LCS의 길이를 출력한다.

### 의사코드 
1. 2차원 dp배열로 접근합니다. 첫번째 문자열의 문자와 2번째 문자열을 비교합니다.
2. 비교한 문자가 같다면 현재 dp에서 대각선에 있는 dp[i-1][j-1]값에 +1한 값을 저장합니다.
3. 같지 않다면 dp[i][j - 1], dp[i - 1][j] 값중에 최대값을 현재 dp에 저장합니다. 
4. dp마지막 요소인 dp[len][len2]에 두문자열의 LSC의 길이가 저장됩니다.

### Code
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const str1 = input[0].split("");
const str2 = input[1].split("");
const len = str1.length;
const len2 = str2.length;

// 0으로 초기화
const dp = Array.from(Array(1001), () => Array());
// 모든 행, 열 0으로 초기화
for (let i = 0; i <= len; i++) {
  for (let j = 0; j <= len2; j++) {
    dp[i][j] = 0;
  }
}

for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= len2; j++) {
    if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
  }
}

console.log(dp[len][len2]);
```
