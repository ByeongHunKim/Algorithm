# 알고리즘 공부
- Last Updated. 2023/03/21

## [reference link ](https://www.acmicpc.net/step)

- 백준 알고리즘 (언어: Typescript)


 ## 프로젝트 세팅

```bash
$ npm init --y

$ npm i -D typescript ts-node

$ npm i -D @types/node

$ tsc --init

// tsconfig.json, package.json 수정
```

## 문제 풀이 세팅
```typescript
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file)
```

## 디버깅 하는 방법 - WebStorm IDE

1. `start debuging : ctrl + d / start file : ctrl + r`
2. `make breakpoint`
2. `step over : F8`