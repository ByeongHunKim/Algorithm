import fs = require("fs");
const inputfile = "example.txt";
console.log(inputfile);
const [x, y] = fs.readFileSync(inputfile).toString().split(" ");

console.log("x, y", x, y);
