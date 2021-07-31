function solution(dirs) {
    var answer = 0;
    const move = {U:[0,1], D:[0,-1], R:[1,0], L:[-1, 0]};
    
    let check =new Set();
    let now=[0,0];
    
    for(let i =0; i<dirs.length; i++){
        let movX = now[0] + move[dirs[i]][0];
        let movY = now[1] + move[dirs[i]][1];
        
        if(movX >5|| movX < -5 || movY >5 || movY < -5) continue;
    
        check.add(""+now[0] + now[1]+movX+movY);
        check.add(""+movX + movY + now[0] + now[1]);
        
        now = [movX, movY];
    }
    return check.size/2;
}