
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 


// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input=[];
// rl.on("line", function (x) {
//   input.push(x)
  
// }).on("close", function () {
//     solution(input);
//   process.exit();
// });


const input = `3 20
1 2 3 4 4 3 5 8 9 19 20 1 2 3 20 4 1 2 3 4`.split("\n");
solution(input);

function solution(input) {
    const [tapLen] = input[0].split(" ").map(Number);
    console.log(tapLen);
    const orderArr = input[1].split(" ").map(Number).reverse();
    let count = 0;

    let tapArr = [];
    

    while(1){
        
        const tmp = orderArr.pop();

        if (tapArr.length < tapLen) {
            if (!tapArr.includes(tmp)) {
                tapArr.push(tmp)
                console.log(tapArr)
            };
        } else {
            
            if (!tapArr.includes(tmp)) {
                // const orderArrLen = orderArr.length > tapLen*2  ? orderArr.length - tapLen*2  : 0;
            
                // const tmpArr = tapArr.map(ele => orderArr.slice(orderArrLen).filter(x => x === ele).length);
                // const minIndex = tmpArr.indexOf(Math.min(...tmpArr));
                const tmpArr = tapArr.map(ele => orderArr.lastIndexOf(ele));
                const minIndex = tmpArr.indexOf(Math.min(...tmpArr));


                tapArr.splice(minIndex, 1, tmp);
                console.log(tapArr)
                
            count++;

            }
        }   
        if (!orderArr.length) { break; }

    }
        return console.log(count);

}