function solution(x) {
    var answer = true;
    let sum = 0;
    var arr = String(x).split("");
    for (let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i]);
    }
    if (x % sum === 0)
        return answer;
    else
        return !answer;
}

solution(455);
console.log(answer);