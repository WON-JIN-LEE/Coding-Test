function solution(nums) {
    var result = 0;
    var sum = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                let temp = nums[i] + nums[j] + nums[k]
                if (isPrime(temp)) {sum.push(temp)};

            }
        }
    }
    return sum.length;
}


function isPrime(n) {
for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {return false;}
    }
    return true;
}