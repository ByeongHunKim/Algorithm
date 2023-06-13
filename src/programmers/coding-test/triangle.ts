function solution(sides) {
    sides = sides.sort((a,b) => a-b) // 오름차순 정렬
    console.log(sides, sides[0], sides[1], sides[2])
    if(sides[0] + sides[1] > sides[2]){
        return 1;
    }else{
        return 2;
    }
}
solution([199, 72, 222])
