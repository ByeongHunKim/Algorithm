import fs = require('fs')
const inputfile = 'example.txt'
// let input = fs.readFileSync(inputfile).toString().split('\n');
// let x = parseInt((input[0]));
// let y = parseInt((input[1]));

const [A, B] = fs.readFileSync(inputfile).toString().trim().split('\n');

let x = parseInt([A][0])
let y = parseInt([B][0])

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
let [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let x = parseInt([A][0])
let y = parseInt([B][0])

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

