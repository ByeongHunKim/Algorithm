
# [반복문](https://www.acmicpc.net/step/3)
## [Typescript로 백준 문제 푸는 방법](https://velog.io/@kgunwoo26/TypeScript%EB%A1%9C-%EB%B0%B1%EC%A4%80-%EB%AC%B8%EC%A0%9C-%ED%92%80%EA%B8%B0)

### 제출용
```typescript
import fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
```

### 문제풀이용
```typescript
import fs = require('fs');
const inputfile = 'example.txt'
const input = fs.readFileSync(inputfile);
```

### 통합용
```typescript
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');
```

### 문제 풀이
- 1번 완료
- 2번 완료
  - 문제를 잘 읽어야 했다. 첫번째 값이 count값을 의미했는데 무시해서 한번 틀렸다
- 3번 완료
- 4번 완료
- 5번 완료
- 6번 완료
- 7번 완료
- 8번 완료
- 9번 완료
  - 이중포문 활용
- 10번 완료
  - 이중포문 활용
- 11번 완료
- 12번 완료