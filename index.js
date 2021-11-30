const crypto = require("crypto")
const salt = "f9c977ea-b423-4b3e-9952-d38cec720b70";
const testString = "abc";
const hashString = `${salt}${testString}`

console.log(crypto.createHash('sha256').update(hashString).digest('base64'))
