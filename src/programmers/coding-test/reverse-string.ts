function solution(my_string) {
    let splitStringArr = my_string.split("");
    console.log(splitStringArr)
    let reverseStringArr = splitStringArr.reverse()
    console.log(reverseStringArr,reverseStringArr.join(""))
    return reverseStringArr.join("")
}
solution('hunsman')