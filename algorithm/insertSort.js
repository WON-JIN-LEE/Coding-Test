function insertionSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
    console.log(`${i}회전: ${arr}`);
  }
  return answer;
}
console.log(insertionSort([5, 4, 3, 2, 1]));
