function solution(array) {
    let fixedArr = array.sort((a,b) => a-b);
    console.log('fixedArr',fixedArr)

}
solution([1, 2, 7, 10, 11])