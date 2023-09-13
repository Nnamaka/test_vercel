const { domainToASCII } = require("url")

let domain = 'http://localhost:3000'
// NODE_ENV 
// if (process.env.NODE_ENV === 'development') {
//     let holdurl = process.env.VERCEL_URL.split(':')

//     if (holdurl?.length === 3) {
//         holdurl.pop()
//         domain = `${holdurl[0] + holdurl[1]}:5328/api/python`
//     } else
//         domain = `${process.env.VERCEL_URL}:5328/api/python`


// } else {
//     domain = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/python`;
// }

// console.log(domain)

if (domain.includes(':3000'))
    domain = domain.replace(':3000','')

console.log(domain)