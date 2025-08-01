//ToString -->
console.log(""+0); //0 -> "0"

console.log(""+(-0)); //-0 -> "-0"

console.log(""+[]); // [] -> ""

console.log(""+{}); // []

console.log(""+[1,2,3,4]); //1,2,3,4

console.log(""+[1,2,null,undefined,23]); //1,2,,,23

console.log(0 - "010") // "010" is 10

console.log(0 - "O10") // NaN "O" is a string alphabet

console.log(0 - 010);//-8 converted Octal

console.log(0 - "0xb") // Convert to hexa Decimal

console.log(0 - []) //0

console.log(1 - []) //1

console.log([] - 1) //-1
 
console.log([6] - 1) //5

console.log([6,5] - 1) //NaN