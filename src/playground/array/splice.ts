let basket = [1, 2, 3, 4, 5];
let arr = [ 3, 4, 1, 2 ];

const a = 3;
const b = 4;

console.log('a - 1', a - 1);
console.log('b - a + a', b - a + 1);

const result = basket.splice(a - 1, b - a + 1, ...arr);
console.log('result', result)
