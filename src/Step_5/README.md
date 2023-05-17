
# [문자열](https://www.acmicpc.net/step/7)


### 통합용
```typescript
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');
```

### 문제 풀이
- 1번 완료
- 2번 완료
  - [trim()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/trim) 
- 3번 완료
  - [slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- 4번 생략
- 5번 완료