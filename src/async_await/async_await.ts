function a() {console.log('a')}

async function b() {
    console.log('b1')
    await a()
    console.log('b2')
}
b()
console.log('c')

/*
output
b1
a
c
b2
*/