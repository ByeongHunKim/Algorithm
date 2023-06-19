function solution(my_string, letter) {
    console.log(my_string.split(letter).join(''))
}
// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
solution("abcdef", "f")