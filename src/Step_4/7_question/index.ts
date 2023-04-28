const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n').map((el) => Number(el));

let minNum = 1;
let maxNum = input[0];

for(const num of input){
    console.log('num', num)
    if(num < minNum){
        minNum = num
    }else if(num > maxNum){
        maxNum = num
    }
}
console.log(minNum)
console.log(maxNum)

// 이 코드는 그냥 입력받은 input에서 가장 작은 수와 큰 수만 알아내는 것
// 목적은 입력받은 input값은 28개만 있고, 실제로는 30개가 있어야 하는데 누락된 2개의 수 중 작은 수와 큰 수를 알아내야한다

/*
    1. for of <-> for in 의 차이점은 무엇인가?
    2. map 함수 사용을 통해 안의 값을 수정해서 새로운 배열에 만드는 것을 해봤다

*/