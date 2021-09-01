# [JavaScript] 문자열 내 p와 y의 개수

## 문제 설명

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

### 제한조건

- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.

### 입출력 예

| s         | answer |
| --------- | ------ |
| "pPoooyY" | true   |
| "Pyy"     | false  |

입출력 예 #1

- 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2

- 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

### 의사코드

1. 문자열 s를 소문자로 변경합니다.
2. 변수 p에 match()로 s에서 p가 있다면 p의 개수를 대입하고 없으면 빈 문자열 저장합니다.
3. y의 경우도 2번과 마찬가지로 수행합니다.
4. 변수 p와 y의 값이 일치여부를 불리언 값으로 반환합니다.

### Point

- match()메서드와 정규표현식을 사용하였습니다.

### Code

```js
function solution(s) {
  let str = s.toLowerCase();
  let p = str.match(/p/g) ? str.match(/p/g).length : "";
  let y = str.match(/y/g) ? str.match(/y/g).length : "";

  return p === y;
}
```

### 메서드

String.prototype.toLowerCase()

- toLowerCase() 메서드는 문자열을 소문자로 변환해 반환합니다.

```js
console.log("ALPHABET".toLowerCase()); // 'alphabet'
```

String.prototype.match()

- match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.
- regexp은 정규식 개체입니다. RegExp가 아닌 객체 obj가 전달되면, new RegExp(obj)를 사용하여 암묵적으로 RegExp로 변환됩니다.
- 문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한 다음 괄호 안에 캡처된 결과가 옵니다.
- 일치하는 것이 없으면 null이 반환됩니다.
