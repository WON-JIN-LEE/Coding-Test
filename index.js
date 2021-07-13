function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    
    d.forEach(item => {
        sum += item;
        if (sum <= budget) { answer++;}
    })
    return answer;
}


function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);
    d.reduce((acc, currentValue) => {
        if (acc + currentValue <= budget) { answer++;}
        return acc + currentValue;
    }, 0)
    return answer;
}


function solution(d, budget) {
    let answer = [];
    d.sort((a, b) => a - b);
    d.reduce((acc, currentValue, i) => {
        if (acc + currentValue <= budget) { answer.push(i);}
        return acc + currentValue;
    }, 0)
    return answer.length;
}