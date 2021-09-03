function solution(s) {
    const answer = s.split(' ').map((word) => word.split(''));
    const len = answer.length;

    for (let i = 0; i < len; i++) {
        answer[i]=answer[i].map((ele, index) => {
                    if (index % 2 === 0) return ele.toUpperCase();
                    else  return ele.toLowerCase();
                }).join('');
        }
    
    return answer.join(' ');
}