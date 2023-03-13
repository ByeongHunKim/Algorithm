import fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputFile = fs.readFileSync(file).toString().split(' ').map(Number);

// todo 1 : 입력된 값을 하나 씩 접근해둔다 [완료]
const [a, b, c] = [inputFile[0], inputFile[1], inputFile[2]];

let biggest_num = 0;
let result = 0;

const answer = (a, b, c): Number => {
  // todo 2 : 입력된 값이 모두 같은 경우 [완료]
  if (a === b && a === c && b === c) {
    console.log(10000 + a * 1000);
    result = 10000 + a * 1000;
    return result;
  }
  // todo 3 : 입력된 값들이 서로 다른 경우 => 1000 + 3개의 수 중 가장 큰 수 * 100 [완료]
  if (a !== b || a !== c || b !== c) {
    if (a === b && a === c) {
      console.log(1000 + a * 100);
      result = 1000 + a * 100;
      return result;
    }
    if (b === c) {
      console.log(1000 + b * 100);
      result = 1000 + b * 100;
      return result;
    }
  }
  // todo 4 : 모두 다른 경우엔 가장 큰 수 * 100 [완료]
  if (a !== b && a !== c && b !== c) {
    const sort = [a, b, c].sort();
    console.log(sort.pop() * 100);
    result = sort.pop() * 100;
    return result;
  }
};

console.log('주사위를 던진 결과는?', answer(a, b, c));
