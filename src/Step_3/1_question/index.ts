import fs = require('fs');
const inputfile = 'example.txt'
const input = Number(fs.readFileSync(inputfile));

// import fs = require('fs');
// const input = Number(fs.readFileSync('dev/stdin'));

for(let i = 1; i <= 9; i++){
    let result = input * i;
    console.log(`${input} * ${i} = ${result}`);
}