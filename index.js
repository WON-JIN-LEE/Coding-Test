function solution(left, right) {
    let answer = 0;
    let len = right - left + 1;
    let num = left;

    for (let i = 0; i < len; i++){
        let count = 0;

        for (let j = 1; j <= num; j++){
            
            if (num % j === 0) { count++;}
        }
        
        if (count % 2 === 0) { answer += num; }
        else { answer -= num; }
        num++;
    }
    return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));