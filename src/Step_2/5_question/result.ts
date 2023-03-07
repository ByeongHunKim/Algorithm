import fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let inputFile = fs.readFileSync(file).toString().split("\n");

console.log("1. inputFile : ", inputFile);

let input = inputFile[0];

console.log("2. input : ", input);

let inputResult = input.split(" ").map((item) => Number(item));
console.log("3. inputResult : ", inputResult);

solution(inputResult[0], inputResult[1]);

function solution(hour, M) {
  // 45분 일찍 알람 설정
  // M = M - 45;
  M -= 45;

  // 만약 45분을 빼서 -가 된다면
  if (M < 0) {
    // 분에 60분을 더하고, 시에 -1

    // M += 60;
    M = M + 60;
    hour--;

    // 만약 hour가 -1 이라면, 그 전날인 23시로 변경
    if (hour === -1) {
      hour = 23;
    }
  }
  console.log(hour + " " + M);
}
