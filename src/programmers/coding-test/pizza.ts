function solution(n) {
    let result = Math.floor(n / 7);
    if(result * 7 < n){
        result++;
    }
    return result;
}
solution(15)