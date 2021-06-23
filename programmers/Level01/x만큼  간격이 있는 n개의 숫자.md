```javascript
function solution(x, n) {
  var answer = [];
  let numNext = x;
  for (let i = 0; i < n; i++) {
    answer.push(numNext);
    numNext += x;
  }
  return answer;
}
```
