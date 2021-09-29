const input = `2
10
15`.split("\n");

const solution = (input) => {
    const rope = input.shift();
    input = input.map(Number).sort((a, b) => a - b);
    const ropeWeigth = input.map((v, i) => v * (rope - i));
    
    return console.log(Math.max(...ropeWeigth));
}

solution(input);