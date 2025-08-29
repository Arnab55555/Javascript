let score = "33abc"

console.log(typeof(score));

let valueInNumber = Number(score); // convert string to number

console.log(typeof(valueInNumber));

console.log(valueInNumber); // output: NaN (not a number) because abc is not a number

// NaN is a type of number in js, therefore typeof NaN is number

let temperature = null

let valueInTemperature = Number(temperature) // null is converted to 0

console.log(valueInTemperature); // output: 0, because null is considered as 0 in number conversion, not empty value

console.log(typeof(valueInTemperature)); // output: number
let value = undefined

let valueInUndefined = Number(value) // undefined is converted to NaN
console.log(valueInUndefined); // output: NaN
console.log(typeof(valueInUndefined)); // output: number

let isLoggedIn = false

let booleanInNumber = Number(isLoggedIn) // false is converted to 0, true is converted to 1
console.log(booleanInNumber); // output: 0
console.log(typeof(booleanInNumber)); // output: number


/* 
Summary of conversion to number
"33" => 33
"33abc" => NaN
null => 0
undefined => NaN
true => 1
false => 0
"abc" => NaN
" " => 0 (empty string with space is considered as 0)
*/

let isLogIn = 1
let booleanIsLogIn = Boolean(isLogIn) // 0 is converted to false, any other number is converted to true
console.log(booleanIsLogIn); // output: true
console.log(typeof(booleanIsLogIn)); // output: boolean

/*
summary of conversion to boolean
0 => false
1 => true
"" (empty string) => false
"abc" => true
null => false
undefined => false
NaN => false
*/


let someNumber = 33
let stringSomeNumber = String(someNumber) // number to string conversion
console.log(stringSomeNumber);
console.log(typeof(stringSomeNumber)); // output: string