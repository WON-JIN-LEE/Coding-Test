# N과 M(4) (15652번) [node.js, JavaScript] 

## 문제 설명
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

- 1부터 N까지 자연수 중에서 M개를 고른 수열
- 같은 수를 여러 번 골라도 된다.
- 고른 수열은 비내림차순이어야 한다.
  - 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.

## 입력
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

## 출력
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.

### 의사코드 
- 비내림차순을N과 M(3)코드에서 dfs 매개변수로 index를 추가해서 앞 숫자와 같거나 높은 숫자로 수열을 만들 수 있게 했습니다.
- 
### Code 
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 
const [N, M] = input[0].split(" ").map(Number);
    const output = [];
    let result = '';
    dfs(1, 1);
    console.log(result);
    
function dfs(index, cnt) {
    if (cnt > M) {
        result += `${output.join(" ")}\n`;
        return;
    }

    for (let i = index; i <=N; i++){
        output.push(i);
        dfs(i,cnt + 1);
        output.pop();
    }
}
```