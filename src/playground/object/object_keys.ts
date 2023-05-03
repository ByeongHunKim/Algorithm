const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.keys(object1));
// Expected output: Array [ 'a', 'b', 'c' ]

Object.keys(object1).forEach((key) => {
    const result = key === 'a' ? 'it is a' : 'it is b'
    console.log(result)
    /*
    it is a
    it is b
    it is b
     */
})
