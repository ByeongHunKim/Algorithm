import fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputFile = fs.readFileSync(file).toString().split('\n');

let [curHour, curMin] = inputFile[0].split(' ').map(Number);
let cookTime = +inputFile[1];

curMin += cookTime;

while (curMin >= 60) {
  curMin -= 60;
  curHour += 1;
}

curHour %= 24;

console.log(curHour, curMin);
