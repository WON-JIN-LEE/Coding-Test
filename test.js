function solution(relation) {
    const answer = new Set();
    const cols = relation[0].length;
    const check = 1 << cols;

    //유일성을 만족하는 키
    for (let i = 1; i < check; i++) {
        let temp = relation.map(x => x.filter((_, col) => i & (1 << col)).join(""));
        const set = new Set(temp);

        if (temp.length === set.size) answer.add(i);
    }

    // 최소성 맞는 키는 남기고 맞지 않는 키 제거
        for (let x of answer) {
            for (let y of answer) {
                if (x >= y) continue;
                if ((x & y) === x) answer.delete(y);
                }
            }
    
    return answer.size;
}