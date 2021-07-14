function solution(lottos, win_nums) {
    const RANK = [6, 6, 5, 4, 3, 2, 1];
    let minCount = lottos.filter(element => win_nums.includes(element)).length;
    console.log(lottos.filter(element => win_nums.includes(element)));
    let unkwonNum = lottos.filter(element => 0 === element).length;
    let maxCount = minCount + unkwonNum;
    
    return [RANK[maxCount], RANK[minCount]];
}
let a = [undefined];
console.log(0 === undefined);