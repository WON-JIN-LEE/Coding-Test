function solution(answers) {
    var answer = [];
    let checklist = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    let point = [0, 0, 0];

    for (let i = 0; i < answers.length; i++){
        if (answers[i] === checklist[0][i % 5]) { point[0]+=1;}
        if (answers[i] === checklist[1][i % 8]){ point[1]+=1;}
        if (answers[i] === checklist[2][i % 10]){ point[2]+=1;}
    }

    const maxNum = Math.max(...point);

    if (point[0] === maxNum) {answer.push(1)};
    if (point[1] === maxNum) {answer.push(2)};
    if (point[2] === maxNum) {answer.push(3)};

    return answer;
}




function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}