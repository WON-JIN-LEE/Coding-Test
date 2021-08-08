function solution(n) {
    const answer = new Array(n).fill().map((_, i )=> new Array(i+1));
    
    let count = 0;
    let row = -1;
    let col = 0;
    
    for(let i = n; i>0; i--){
           for(let i = n; i > 0; i--) answer[++row][col] = ++count;
           for(let i = n-1; i > 0; i--) answer[row][++col] = ++count;
           for(let i = n-2; i > 0; i--) answer[--row][--col] = ++count;
        n -= 3;
    }
    return answer.flat();
}
