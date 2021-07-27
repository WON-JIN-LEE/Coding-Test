function solution(s){
    var answer = 0;
    const arrStr = s.split("");
    if (arrStr[0] == ")" || arrStr[arrStr.length-1] == "(" ) return false;
    
    for(const ele of arrStr){
        (ele == "(") ? answer++ : answer--;
        if (answer<0) return false;
    };
    return (answer === 0) ?  true : false ;
    
}


console.log(solution("()))((()"));

