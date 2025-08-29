const accountId = 144553
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState; // Variable declared but not defined

// accountId = 2  // Variable cannot be changed if declared using const

accountEmail = "xyz@gmail.com"

accountPassword = "67890"

accountCity = "Navi Mumbai"

console.log(accountId);

/*
Prefer not to use var for variable declaration
because of issue with block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);