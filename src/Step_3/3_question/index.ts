// todo n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

import fs = require('fs');
const inputfile = 'example.txt'
const input = Number(fs.readFileSync(inputfile)); // 3

// import fs = require('fs');
// const input = Number(fs.readFileSync('dev/stdin'));

let result = 0;

for (let i = 1; i <= input; i++){
    result += i;
}
console.log(result) // 6

