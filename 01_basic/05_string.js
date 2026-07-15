// Declaration
const name = "Example"
const country = new String("Dreamland")
const repoCount = 30


// old way
console.log(name + " " + repoCount);

// modern way -> string interpolation
console.log(`Hello my name is ${name} and my repo is ${repoCount}`)


// string prototypes
console.log(`Country: ${country}`)
console.log(`Country (uppercase): ${country.toUpperCase()}`)
console.log(`First char of Country: ${country.charAt(0)}`)
console.log(`'D' index: ${country.indexOf('D')}`)
console.log(`#chars in country: ${country.length}`)
//see substring, slice, trim, replace, split, ... in JS mdn documentation