let x = 10 //True
console.log(!x)

let y = undefined //False
console.log(!y)

let a = NaN //False
console.log(!a)

let b = -0 //False
console.log(!b)

let c = "" //False 
console.log(!c)

let d = null //False
console.log(!d)

let e = +0 //False
console.log(!e)

let f = false //False
console.log(!f)

console.log(null === null) //True
console.log(NaN === NaN) //False
// console.log(Nan == NaN) //Error
