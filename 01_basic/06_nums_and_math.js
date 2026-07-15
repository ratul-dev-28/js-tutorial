// =========== NUMBERS ===========

const score = 400
// console.log(score)

// const balance = new Number(123456.789)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)

// console.log(balance.toFixed(2))
// console.log(balance.toFixed(3))
// console.log(balance.toFixed(4))

// console.log(balance.toPrecision(5))
// console.log(balance.toPrecision(6))
// console.log(balance.toPrecision(7))

// console.log(balance.toLocaleString())
// console.log(balance.toLocaleString('en-IN'))


// =========== MATH ===========
// console.log(Math)

// console.log(Math.abs(5))
// console.log(Math.abs(-5))

// console.log(Math.round(3.4))
// console.log(Math.round(3.5))

// console.log(Math.ceil(3.4))
// console.log(Math.floor(3.5))

// console.log(Math.min(-4, 45, -52, 49))
// console.log(Math.max(-4, 45, -52, 49))



// =========== RANDOM ===========
const random = Math.random() // gives a random value form 0 to 1
console.log(random)


/* TASK create a random value in range of (10-20) */
const min = 10
const max = 20
const scale = max-min+1
console.log((random * scale) + min)
console.log(Math.floor(random * scale) + min)