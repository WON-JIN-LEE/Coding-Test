function solution(info, query) {
    const answer = [];
    const infoMap = {};

    function combination(array, score, start) {

        const key = array.join("");
        const value = infoMap[key]; //값 있는지 없는지 확인해주기

        if (value) {
            //값이 있으면 추가하고
            infoMap[key].push(score);
        } else {
            //값이 없으면 프로퍼티 만들어줘야 됨
            infoMap[key] = [score];
        }

        for (let i = start; i < array.length; i++) {
            const temp = [...array]; //얕은 복사
            temp[i] = "-";
            combination(temp, score, i + 1);
        }
    }

    for (const e of info) {
        const splited = e.split(" ");
        const score = Number(splited.pop());
        combination(splited, score, 0);
    }

    for (const key in infoMap) {
        //오름차순 정렬합니다.
        infoMap[key] = infoMap[key].sort((a, b) => a - b);
    }

    //query 조건에 맞는 info 추출
    for (const e of query) {
        const splited = e
            .replace(/ and /g, " ")
            .split(" ");
        const score = Number(splited.pop());
        const key = splited.join("");
        const array = infoMap[key];

        if (array) {
            console.log(score)
            console.log(array)

            let start = 0;
            let end = array.length;

            //이분탐색
            while (start < end) {
                const mid = Math.floor((start + end) / 2);
                if (array[mid] >= score) {
                    end = mid;
                } else if (array[mid] < score) {
                    start = mid + 1;
                }
            }
            console.log(start)
            const result = array.length - start;
            answer.push(result);
        } else {
            answer.push(0);
        }
    }

    return answer;
}

const infoMap = new Map();
  console.log(typeof infoMap)