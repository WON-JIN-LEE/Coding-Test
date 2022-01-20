# ROT13 (11655번) [node.js, JavaScript] 

## 문제 설명
ROT13은 카이사르 암호의 일종으로 영어 알파벳을 13글자씩 밀어서 만든다.

예를 들어, "Baekjoon Online Judge"를 ROT13으로 암호화하면 "Onrxwbba Bayvar Whqtr"가 된다. ROT13으로 암호화한 내용을 원래 내용으로 바꾸려면 암호화한 문자열을 다시 ROT13하면 된다. 앞에서 암호화한 문자열 "Onrxwbba Bayvar Whqtr"에 다시 ROT13을 적용하면 "Baekjoon Online Judge"가 된다.

ROT13은 알파벳 대문자와 소문자에만 적용할 수 있다. 알파벳이 아닌 글자는 원래 글자 그대로 남아 있어야 한다. 예를 들어, "One is 1"을 ROT13으로 암호화하면 "Bar vf 1"이 된다.

문자열이 주어졌을 때, "ROT13"으로 암호화한 다음 출력하는 프로그램을 작성하시오.
## 입력
첫째 줄에 알파벳 대문자, 소문자, 공백, 숫자로만 이루어진 문자열 S가 주어진다. S의 길이는 100을 넘지 않는다.
## 출력
첫째 줄에 S를 ROT13으로 암호화한 내용을 출력한다.
### 의사코드 
1. 문자열의 각 문자를 순회하면서 영문자라면 ROT13 함수로 호출해서 각 문자를 암호화합니다.
2. 공백이나 숫자는 바로 result에 이어 붙입니다.
3. ROT13 함수에 전달된 문자가 13을 더했을 때 "Z", "z" 범위를 넘어간다면 다시 A, a로 순회할 수 있게 26을 빼줍니다.
 
### Code
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 


const answer = solution(input);
console.log(answer);
function solution(input) {
    const string = input[0]
    const len = string.length;
    let result = '';

    for (let i = 0; i < len; i++) {

        if (string[i] >= "A" && string[i] <= "Z") {
            result += ROT13(string[i], "Z");
        } else if (string[i] >= "a" && string[i] <= "z") {
            result += ROT13(string[i], "z");
        } else {
            result += string[i];
        }

    }

    return result;
}

function ROT13(char, limt) {
    if (char.charCodeAt(0) + 13 > limt.charCodeAt(0)) {
        return String.fromCharCode(char.charCodeAt(0) + 13 - 26);
    } else 
        return String.fromCharCode(char.charCodeAt(0) + 13);
    }

```