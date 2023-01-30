/*
시험 점수를 입력받아 90 ~ 100점은 A,
80 ~ 89점은 B,
70 ~ 79점은 C,
60 ~ 69점은 D,
나머지 점수는 F를 출력하는 프로그램을 작성하시오.
*/

import fs = require('fs')
const inputfile = 'example.txt'
let input = fs.readFileSync(inputfile).toString().split(' ');
let a = parseInt(input[0])

if(90 <= a && a <= 100) {
    console.log('A')
} else if ( 80 <= a && a <= 89){
    console.log('B')
} else if ( 70 <= a && a <= 79){
    console.log('C')
} else if ( 60 <= a && a <=69){
    console.log('D')
} else{
    console.log('F')
}

/*
import fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0])

if(90 <= a && a <= 100) {
    console.log('A')
} else if ( 80 <= a && a <= 89){
    console.log('B')
} else if ( 70 <= a && a <= 79){
    console.log('C')
} else if ( 60 <= a && a <=69){
    console.log('D')
} else{
    console.log('F')
}
*/