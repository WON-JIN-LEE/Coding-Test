const pair = {'}': '{', ']': '[', ')': '(' };

function solution(s) {
    const arr = s.split('');
    const sLen = arr.length;
    let result = 0;
    const isValid = arr => {
        const stack = [];

        for (let i = 0; i < sLen ; i++) {
            const c = arr[i];
            if (pair[c] === undefined) stack.push(c);
            else {
                if (pair[c] !== stack[stack.length - 1]) return false;
                stack.pop();
            }
        }

        if (stack.length) return false;
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        if (isValid(arr)) result++;
        arr.push(arr.shift());
    }

    return result;
}
