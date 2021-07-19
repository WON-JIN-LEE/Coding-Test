function solution(n, lost, reserve) {
    
    const realLost = lost.filter(ele => !reserve.includes(ele));
    const realReserve = reserve.filter(ele => !lost.includes(ele));

    const noWear = realLost.filter((ele)=> {

        for (let i = 0; i < realReserve.length;i++){
            if (Math.abs(realReserve[i] - ele) === 1) {
                realReserve.splice(i, 1);
                return false;
            }
                
        }
        return true;
    });

    return n-noWear.length;
}

solution(5, [2, 4], [1, 3, 5]);
console.log(solution(5, [2, 4], [1, 3, 5]));