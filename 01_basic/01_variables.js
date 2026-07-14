const accountId = 144553
let accountEmail = "example@yey.com"      // modern feature
var accountPassword = "12345"            // no concept of scope
accountCity = "Dreamland"               // possible! but unsafe
let accountState                       // undefined
// accountId = 2
// TypeError: Assignment to constant variable is not allowed

// let vs var -> prefer using let


accountEmail = "exmaple1@yey.com"

// console.log() -> prints value
console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountState)

// console.table() -> prints in table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])




// =======================================================================





