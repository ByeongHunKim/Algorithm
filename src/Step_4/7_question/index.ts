const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n').map((el) => Number(el));

let arr = [];

for(let i=1; i < 31; i++) {
    if(input.includes(i)) continue;
    arr.push(i)
}

arr.sort((a,b) => a - b);
console.log(arr[0])
console.log(arr[1])

// 이 코드는 그냥 입력받은 input에서 가장 작은 수와 큰 수만 알아내는 것
// 목적은 입력받은 input값은 28개만 있고, 실제로는 30개가 있어야 하는데 누락된 2개의 수 중 작은 수와 큰 수를 알아내야한다

/*
    1. for of <-> for in 의 차이점은 무엇인가?
    2. map 함수 사용을 통해 안의 값을 수정해서 새로운 배열에 만드는 것을 해봤다
    3. sort사용
    4. include 함수

*/