// math.sqrt()
// 인수로 전달된 숫자의 제곱근을 반환한다

const targetPrice = 0.07130450222070378 // 파라미터로 보내주는 코드(파일)에서 계산됨 - cex price
const base_balance = 16788.127286485 // SPL-Token - base
const quote_balance = 1196.764395639 // SOL - quote

const beforeSqrt = base_balance * quote_balance * targetPrice // 제곱근이 반환되기 전
console.log('beforeSqrt',beforeSqrt)

const sqrtValue1 = Math.sqrt(base_balance * quote_balance * targetPrice) // 제곱근이 반환된 후
console.log('sqrtValue >>',sqrtValue1)

const sqrtValue1_1 = sqrtValue1 - quote_balance // 반환된 제곱근 - 현재 quote_balance
console.log('sqrtValue1_1 >>',sqrtValue1_1)

const sqrtValue2 = sqrtValue1_1 / 0.9975 // 왜 0.9975를 나눠주는 지는 모르겠음
console.log('sqrtValue2 >>',sqrtValue2)

const sqrtValue3 = sqrtValue2 * 10 ** 9 // sqrtValue3 >> 152703936.99992973
console.log('sqrtValue3 >>',sqrtValue3)

const sqrtValue4 = Math.floor(sqrtValue3) // 소수점 제거 152703936
console.log('sqrtValue4 >>',sqrtValue4)

const sqrtValue5 = sqrtValue4 / 10 ** 9 // 0.152703936
console.log('sqrtValue5 >>',sqrtValue5)

// amountIn과 Out이 조건에 따라 서로 반대가 된다. 조건 : if(targetPrice > poolInfo.current_price)
// case 1 : targetPrice가 현재 풀 가격보다 큰 경우 -> tokenIn값에 quote_token -> tokenOut값에 base_token
// case 2 : 풀의 현재 가격이 더 높은 경우 -> tokenIn값에 base_token -> tokenOut 값에 quote_token
const amountIn =
    Math.floor(
        ((Math.sqrt(base_balance * quote_balance * targetPrice) - quote_balance) / 0.9975) *
        10 ** 9
    ) /
    10 ** 9
const amountOut =
    Math.floor(
        (base_balance - Math.sqrt((base_balance * quote_balance) / targetPrice)) *
        10 ** 9
    ) /
    10 ** 9

console.log('amountIn >>', amountIn)
console.log('amountOut >>', amountOut)
// amountIn >> 0.152703936
// amountOut >> 2.136492924



/*
{
  "tokenIn": {
    "symbol": "SOL",
    "name": "UNKNOWN",
    "decimals": 9,
    "mint": "So11111111111111111111111111111111111111112"
  },
  "amountIn": 0.152703936,
  "tokenOut": {
    "symbol": "SPL-Token",
    "name": "UNKNOWN",
    "decimals": 9,
    "mint": "5tB5D6DGJMxxHYmNkfJNG237x6pZGEwTzGpUUh62yQJ7"
  },
  "amountOut": 2.136492924
}
*/