function solution(numbers) {
    let maxNum1 = Math.max(...numbers)
    if(maxNum1 == 1){
        return 1;
    }
    const result = numbers.filter(number => number !== maxNum1);
    let maxNum2 = Math.max(...result);
    if(result.length == 0){
        return maxNum1 * maxnum1;
    }
    return maxNum1 * maxNum2;
}
solution([2, 2])