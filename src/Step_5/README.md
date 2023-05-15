
# [문자열](https://www.acmicpc.net/step/7)


### 통합용
```typescript
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');
```

### 문제 풀이
- 1번 완료