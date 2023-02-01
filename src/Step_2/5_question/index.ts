import fs = require('fs')
const inputfile = 'example.txt'
const [x, y] = fs.readFileSync(inputfile).toString().trim().split(' ').map(Number);

/*
두 가지 경우의 수
1. min에서 45를 뺀 값이 음수일 경우
2. hour값이 음수 일 경우

먼저 min에서 45를 뺀 값을 구한다.
만약 이 값이 0보다 작으면 min = 45를 뺸 값 + 60을 해주고
hour값을 1 빼준다.
만약 1을 뺀 값이 -1일 경우 hour값은 23이 된다
*/

let hour = x
let min = y - 45

console.log('min:', min)

if(min < 0){
    // console.log('분이 0보다 작습니다')
    min += 60
    hour -= 1
    if(hour == -1){
        // console.log('시간이 0보다 작습니다')
        hour = 23
    }
    // console.log(hour, min)
}
console.log(hour, min)
/*
import fs = require('fs')
const [x, y] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let hour = x
let min = y - 45

if(min < 0){
    min += 60
    hour -= 1
    if(hour == -1){
        hour = 23
    }
    console.log(hour, min)
}
*/
