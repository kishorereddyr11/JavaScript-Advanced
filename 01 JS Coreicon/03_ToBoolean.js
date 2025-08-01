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

let obj = {x:10, valueOf(){return 100}};
console.log(99 == obj) //False
 
console.log(100 == obj) //True

let obj1 = {x:10};
console.log(99 == obj1) //False
 
console.log(100 == obj1) //False

let obj2 = {x:10};
console.log(obj1 === obj2) // False
console.log(obj1 === obj1) //True
console.log(obj1 == obj2) // False
console.log(obj1 == obj1) //True