// Program to add first n natural numbers
// let has a scope of block level
// var has scope of global level.
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)




let obj = {   // seems like json it is called object  likewise  in cpp.
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop: used to loop through object keys and their values. 
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop: used to loop through charactors of a object word.
for (let b of "Harry") {
  console.log(b) //output = h  "\n" a "\n" r "\n" r "\n" y.
}
*/// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)




let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Harry") {
  console.log(b)
}

