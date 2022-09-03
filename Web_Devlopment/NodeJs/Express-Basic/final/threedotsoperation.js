/*
[...array]  it is use make an copy of js objects in array form
some essay examples to understand are:
--> we use this because it can used to filter and search in that json object.

let array1 = ['h', 'e', 'l', 'l', 'o'];
let array2 = [...array1];
console.log(array2);
['h', 'e', 'l', 'l', 'o'] // output



let desserts = ['cake', 'cookie', 'donut'];
let desserts1 = ['icecream', 'flan', 'frozen yoghurt', ...desserts];
console.log(desserts);
//Appending baked_desserts after flan
let desserts2 = ['icecream', 'flan', ...desserts, 'frozen yoghurt'];
console.log(desserts2);
// output
[ 'cake', 'cookie', 'donut' ]
[ 'icecream', 'flan', 'cake', 'cookie', 'donut', 'frozen yoghurt' ]



function multiply(number1, number2, number3) {
  console.log(number1 * number2 * number3);
}
let numbers = [1,2,3];
multiply(...numbers);



//Passing elements of the array as arguments to the Math Object
let numbers = [1,2,300,-1,0,-100];
console.log(Math.min(...numbers));

*/
const express = require('express')
const app = express()
const { products } = require('../data')

const array = [...products]
console.log(array)