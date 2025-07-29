obj1 = {}

console.log('hi'+ obj1) //hi[object Object]

console.log('hi'-obj1) //NaN

console.log('19' - obj1) //NaN

console.log(19 + obj1) //19[object Object]

console.log(10 - obj1)//NaN

obj2 = {valueOf(){return 11},toString(){return 10}}

console.log("18" - obj2) //8

obj2 = {valueOf(){return "bye"},toString(){return "hi"}}

console.log("hi" + obj2) //hibye


obj3 = {toString(){return 10},valueOf(){return 11}}

console.log(18 - obj3) //7

console.log(18 + obj3) //29

