import fs = require('fs');
const inputfile = 'example.txt'
const input = fs.readFileSync(inputfile).toString().split('\n');

// import fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().split('\n');

const count = Number(input[0])

for(let i = 1; i <= count; i++){
    const eachValue = input[i].split(' ');
    const a = Number(eachValue[0]);
    const b = Number(eachValue[1]);
    console.log(a+b);
}

