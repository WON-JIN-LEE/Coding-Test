function solution(files) {
    let answer = [];
    //HEAD, NUMBER, TAIL 구분 NUMBER를 기준으로 앞/뒤 구분 search(정규식)
    let len = files.length;
    const reg = /(\d+)/g; //숫자가 1개이상 매칭되는 정규식(메모리 고려)
    for (let i = 0; i < len; i++) {
        answer.push({ index: i, value: files[i].split(reg) }); //[{index:0~n, value:[HEAD, NUMBER, TAIL]}]
    }

    answer.sort(fileSort);
    return answer.map(obj => obj.value.join(''));
}

function fileSort(a, b) {
    const head_a = a.value[0].toLowerCase();
    const head_b= b.value[0].toLowerCase();

    if (head_a < head_b) return -1;
    if (head_a > head_b) return 1;
    
    const numA = parseInt(a.value[1]);
    const numB = parseInt(b.value[1]);
        
    if (numA < numB) return -1;
    if (numA > numB) return 1;
    
    if (a.index < b.index) return -1;
    else return 1;
    
    
}