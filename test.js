const input = `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`.split("\n");

const N = input.shift();
const tmp = input.map((v) => v.split(" ").map(Number));
const schedule = [];
let max = 0;
for (let i = 0; i < N; i++) {
  schedule.push({ date: tmp[i][0], cost: tmp[i][1] });
}

re_schedule(0, 0, schedule);
console.log(max);

function re_schedule(start, sum, schedule) {
  for (let i = start; i < N; i++) {
    if (i + schedule[i].date <= N) {
      re_schedule(i + schedule[i].date, sum + schedule[i].cost, schedule);
    } else {
      max = Math.max(max, sum);
    }
  }
  max = Math.max(max, sum);
  return;
}
