import fs = require('fs')
const inputfile = 'example.txt'
let input = fs.readFileSync(inputfile).toString().split(' ');
let x = parseInt((input[0]));
let y = parseInt((input[1]));

// case1: x,y 둘다 양수인 경우
// case2: x 양수 y 음수인 경우
// case3: x 음수 y 양수인 경우
// case4: x,y 둘다 음수인 경우

if(x > 0 && y > 0){
    console.log(1)
}else if( x < 0 && y > 0){
    console.log(2)
}else if ( x > 0 && y < 0){
    console.log(3)
}else{
    console.log(4)
}

/*
import fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let x = parseInt((input[0]));
let y = parseInt((input[1]));

if(x > 0 && y > 0){
    console.log(1)
}else if( x < 0 && y > 0){
    console.log(2)
}else if ( x > 0 && y < 0){
    console.log(3)
}else{
    console.log(4)
}
*/