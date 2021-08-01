function solution(s) {
    let answer = [0, 0];
    let str = s;
    let len = s.length;

    while (len>1) {
        str = [...str].filter(element => '1' === element).join('');
        let oneCount = str.length;
        
        answer[0] += 1;
        answer[1] += len - oneCount;

        str = oneCount.toString(2);
        len = str.length;

        }
    return answer;
}

function solution(s) {
    let answer = [0, 0];
    let str = s;

    while (str.length > 1) {

        answer[0] += 1;
        answer[1] += (str.match(/0/g) || []).length;
        str = str.replace(/0/g, "").length.toString(2);

    }
    return answer;
}