function solution(arr) {
    //반환값 선언
    let total = [0, 0];

    const compress = (arr, n) => {
        const value = arr[0][0];

        // 배열의 길이가 1이하면 total에 value값 추가한다.
        if (n <= 1) {
            total[value] += 1;
            return;
        }

        //배열이 모두 동일한 값으로 이루어졌는지 확인하기 위해 배열의 모든 값을 더합니다.
        const sum = arr.reduce((sum, row) => sum + row.reduce((a, b) => a + b), 0);

        //총합이 0이면 모든 배열의 요소가 0이고, 총합이 배열의 길이 제곱과 같아면 배열의 요소가 모두 1이다. 
        if (sum === 0 || sum === n * n) {
            total[value] += 1;
            return;
        }

        //압축할 수 없다면 전달받은 배열 4등분하여 각각의 배열을 인자로 compress를 시킨다.
        const divide1 = arr.slice(0, n / 2);
        const divide2 = arr.slice(n / 2);

        compress(divide1.map(values => values.slice(0, n/2)), n/2);
        compress(divide1.map(values => values.slice(n/2)), n/2);
        compress(divide2.map(values => values.slice(0, n/2)), n/2);
        compress(divide2.map(values => values.slice(n/2)), n/2);

    }
    
    compress(arr, arr.length);
    return total;
}