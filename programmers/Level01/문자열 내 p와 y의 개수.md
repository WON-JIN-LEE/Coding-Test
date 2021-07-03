```js
function solution(s) {
  let str = s.toLowerCase();
  let p = str.match(/p/g);
  let y = str.match(/y/g);

  if (p === null) {
    p = "";
  }
  if (y === null) {
    y = "";
  }

  if (p.length === y.length) {
    return true;
  } else {
    return false;
  }
}
```

## String.prototype.toLowerCase()

- toLowerCase() 메서드는 문자열을 소문자로 변환해 반환합니다.

```js
console.log("ALPHABET".toLowerCase()); // 'alphabet'
```

## String.prototype.match()

- match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.
- regexp은 정규식 개체입니다. RegExp가 아닌 객체 obj가 전달되면, new RegExp(obj)를 사용하여 암묵적으로 RegExp로 변환됩니다.
- 문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한 다음 괄호 안에 캡처된 결과가 옵니다.
- 일치하는 것이 없으면 null이 반환됩니다.
