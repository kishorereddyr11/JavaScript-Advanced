// Abstract Operations are those operations which are actually executed 
// internally by javascript you can not use it but internally dose a lot of things
//one of those is ToNumber(argument) 
console.log(2-9) //-7
console.log(2-null) // 2 - null -> 2 - 0
console.log(2-undefined) // 2 - undefined -> 2 - NaN -> NaN
console.log("hi"-undefined) //NaN
console.log("hi"-null) //NaN

// Piller of js
// 1. Coercion
// 2.
// 3. OOPs
// 4. Async nature executed in js
console.log("hi"+1) //hi1
console.log("hi"-1) //NaN

console.log("hi"+undefined) //hiundefined
console.log("hi"+null) //hinull

console.log("hi"*undefined) //NaN
console.log("hi"*null) //NaN

console.log(1-"243") //-242
console.log(1-"24abc3") //NaN

// Hexadecimal to decimal
console.log(1-"0xa") // -9

console.log("hi"/undefined) //NaN
console.log("hi"/null) //NaN

console.log(1/undefined) //NaN
console.log(1/null) //Infinity

console.log(undefined/1) //NaN
console.log(null/1) //0