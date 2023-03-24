const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let count = Number(fs.readFileSync(file).toString());


let result = '';
let blank = '';
for (let i = 1; i <= count; i++){
    result += "*";
    for (let j = 0; j < count-i; j++){
        blank += ' ';
    }
    console.log(blank + result);
    blank = '';
}


