import fs = require('fs')
const inputfile = 'example.txt'
let input = fs.readFileSync(inputfile).toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a > b) {
    console.log('>')
}else if ( a < b ) {
    console.log('<')
}else if ( a = b) {
    console.log('==')
}

/*
import fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a > b) {
    console.log('>')
}else if ( a < b ) {
    console.log('<')
}else if ( a = b) {
    console.log('==')
}
*/