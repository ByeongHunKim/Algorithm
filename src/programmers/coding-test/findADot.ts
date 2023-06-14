function solution(dot) {
    let xNum = dot[0]
    let yNum = dot[1]
    if(xNum > 0 && yNum > 0){
        return 1;
    }else if(xNum < 0 && yNum >0){
        return 2;
    }else if(xNum < 0 && yNum < 0){
        return 3;
    }else{
        return 4;
    }

}
solution([2, 4])