const input ="5".split("\n"); 

const N = input.shift() * 1;
let result = '';
for(let i=1; i<=N; i++){
    
    result+=`${' '.repeat(N-i)}${'*'.repeat(i)}\n`;
}

    console.log(result.trimEnd());
