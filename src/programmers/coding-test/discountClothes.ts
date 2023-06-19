function solution(price) {
    if(price >= 100000 && price < 300000) {
        console.log('10만원')
        console.log(price - (price * 0.05))
        return Math.floor(price - (price * 0.05));
    }else if (price >= 300000 && price < 500000) {
        console.log('20만원')
        console.log(price - (price * 0.1))
        return Math.floor(price - (price * 0.1));
    }else if (price >= 500000) {
        console.log('30만원')
        console.log(price * 0.2)
        console.log(price - (price * 0.2))
        return Math.floor(price - (price * 0.2));
    }else {
        console.log(price)
        return price;
    }
}
solution(200000)