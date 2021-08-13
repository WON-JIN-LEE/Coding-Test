function solution(numbers) {
    function f(num){
        if(num % 2 === 0) return num+1;
    
        const bit = "0"+ num.toString(2);
        const index = bit.lastIndexOf("0");
        return parseInt(`${bit.slice(0, index)}10${bit.slice(index+2)}`,2)
    }
    return numbers.map(ele => f(ele));
}