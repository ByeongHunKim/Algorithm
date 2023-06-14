function solution(numbers, num1, num2) {
    let endIndex = num2 + 1
    return numbers.slice(num1,endIndex);
}
solution([1,2,3,4,5], 1, 3)