# k번째수

## 문제 설명

    배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

    예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

    1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
    2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
    3. 2에서 나온 배열의 3번째 숫자는 5입니다.

    배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한 조건

- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.

### 코드 설명

1. commands 배열 요소에서 [i,j,k] 할당받고, slice메서드로 i, j까지 요소들을 복사한뒤 sort 메서드로 정렬한다.
2. 정렬된 배열에서 k번째 있는 요소를 answer 메서드에 추가한 뒤 반환한다.

### Point

- 복사하는 slice메서드와 정렬해주는 sort 메서드를 사용하면 쉽게 구현할 수 있습니다.

#### Code

```js
function solution(array, commands) {
  var answer = [];
  let i = 0;
  let j = 0;
  let k = 0;

  for (const ele of commands) {
    i = ele[0] - 1;
    j = ele[1];
    k = ele[2] - 1;

    let arr = array.slice(i, j).sort((a, b) => a - b);
    answer.push(arr[k]);
  }
  return answer;
}
```
