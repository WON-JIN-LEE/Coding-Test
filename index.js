// const input =
// require("fs").readFileSync("/dev/stdin").toString().split("\n"); 입력메세지 받음
const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`.split(
    "\n"
); //입력메세지 받음
    const N = Number(input.shift());

function solution(arr) {

    //회의를 다음 순서대로 정렬 
    //1) 먼저 끝나는 회의 
    //2) 끝나는 시간이 같다면, 먼저 시작하는 회의를 기준으로 정렬합니다.
    const schedule = arr
        .map((str) => str.split(" ").map(Number))
        .sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] - b[0];
            } else {
                return a[1] - b[1];
            }
        });

    //schedule의 첫번째 요소로 초기값 설정
    let count = 1;
    let tmp = schedule[0][1];

    //배열을 순회하면서 호의 끝시간과 시작 시간 비교 후, 시간과 회의 개수 갱신
    for (let i = 1; i < N; i++) {
        if (tmp <= schedule[i][0]) {
            tmp = schedule[i][1];
            count++;
        }
    }
    return count;
}

const answer = solution(input);
console.log(answer);