function solution(s) {
  var answer = 0;
  if (s[-1] == "(") return false;

  for (const ele of s) {
    ele == "(" ? answer++ : answer--;
    if (answer < 0) return false;
  }
  return answer === 0 ? true : false;
}