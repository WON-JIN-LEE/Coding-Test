function solution(nums) {
    var halfLen = nums.length/2;
    const {size} =new Set(nums);
    
    return size > halfLen ? halfLen : size;
}