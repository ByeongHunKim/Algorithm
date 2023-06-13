function solution(money:number) {
    let result = [];
    let maximumCoffeeCount = Math.floor(money / 5500);
    let remainingPrice = money - 5500 * maximumCoffeeCount;
    console.log(maximumCoffeeCount, remainingPrice)
    result.push(maximumCoffeeCount, remainingPrice)
    console.log('result',result)

}
solution(15000)