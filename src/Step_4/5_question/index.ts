const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const [[n, m], ...input] = require("fs").readFileSync(file).toString().trim().split("\n").map(x => x.split(" ").map(Number));
let arr = Array(n).fill(0);
for (let [i, j, k] of input) {
    for (let idx=i-1; idx<j; idx++) {
        arr[idx] = k;
    }
}
console.log( arr.join(" ") );
