// const greeting = "hello world!"
// console.log("==> " + greeting);

const fs = require('fs')
// let readingInSync = fs.readFileSync('./texts/text1.txt' , "utf-8")
// console.log(readingInSync);

// const text = "hello i am haroon and i am a developer.."
// let writeInSync = fs.writeFileSync('./texts/text1.txt' , text )

// let readFile = fs.readFile('./texts/text1.txt' , 'utf-8', (err, data) => {
//     console.log(data);
// });




const http = require('http')
const url = require('url')
const { writeHeapSnapshot } = require('v8')

let server = http.createServer((request , response) => {
    if (request.url == "/javascript") {
        response.end('are you finding ' + request.url.slice(1) + " job?")
    } else if (request.url == "/react") {
        console.log(request.url);
        response.end('are you finding ' + request.url.slice(1) + " job?")
    } else {
        response.writeHead(404)
    }
})

server.listen(8000 , '127.0.0.1' , () => {
    console.log('server is runing!');
})