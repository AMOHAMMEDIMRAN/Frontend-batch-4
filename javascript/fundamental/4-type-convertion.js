




let val;


// Number to String

val = String(333)

console.log(val)
console.log(typeof val)

// Boolean to String

val = String(true)
console.log(val)
console.log(typeof val)

// Array to String

val = String([1,2,3])

console.log(val)
console.log(typeof val)

// String to Number

val = Number("333")

val = Number("hello") //NaN

console.log(val)
console.log(typeof val)

val = Number(null)
console.log(val)
console.log(typeof val)


val = parseInt(99.99)
val = parseFloat(99.99)

console.log(val)