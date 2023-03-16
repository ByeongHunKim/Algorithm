import fs = require('fs');
const inputfile = 'example.txt'
const input = fs.readFileSync(inputfile).toString().split('\n');

const paymentPrice = Number(input[0]);
const inputLength = Number(input[1]) + 1;
let estimatedPrice = 0;

for(let i = 2; i <= inputLength; i++){
    const priceString = input[i].split(' ');
    const productPrice = Number(priceString[0]);
    const productAmount = Number(priceString[1]);
    const totalProductPrice = productPrice * productAmount;
    estimatedPrice += totalProductPrice
}

if(paymentPrice !== estimatedPrice){
    console.log('No')
}else{
    console.log('Yes')
}