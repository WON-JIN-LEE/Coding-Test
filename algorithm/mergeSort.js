function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);

  const L = array.slice(0, mid)
  const R = array.slice(mid)
  
  const L_sort = mergeSort(L);
  const R_sort = mergeSort(R);

  return merge(L_sort, R_sort)

 }
function merge(L_arr, R_arr) { 
  let answer = [];
  let L_len = L_arr.length;
  let R_len = R_arr.length;
  let p1 = p2 = 0;

  while (p1 < L_len && p2 < R_len) {
    if (L_arr[p1] <= R_arr[p2]) {
      answer.push(L_arr[p1]);
      p1 += 1;
    } else {
      answer.push(R_arr[p2]);
      p2 += 1;
    }
  }
  while (p1 < L_len) answer.push(L_arr[p1++]);
  while (p2 < R_len) answer.push(R_arr[p2++]);


  return answer;
} 

console.log(mergeSort([5, 4, 3, 2, 1]));