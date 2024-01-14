// const greeting = "hello world!"
// console.log("==> " + greeting);


const fs = require('fs').promises

// const text = "i am haroon and i am a developer..."
// const writeFile = fs.writeFileSync('./texts/text1.txt' , text)

// const readingFileSync = fs.readFileSync('./texts/text1.txt' , 'utf-8')
// console.log(readingFileSync);

// const readingFile = fs.readFile('./texts/text1.txt' , 'utf-8' , (err, data) => {
//     console.log('data ==> ' , data);
// })


// task 1
// fs.readFile('./texts/text1.txt' , 'utf-8' , (err,text1) => {
//     fs.readFile('./texts/text2.txt' , 'utf-8' , (err,text2) => {
//         fs.writeFile("./texts/text3.txt" , `${text1} ${text2}` , 'utf-8' ,(err) => {
//             if (err) throw err;
//             console.log("your file has been saved!");
//         })
//     })
// })

// task 2
// fs.readFile('./texts/text1.txt' , 'utf-8')
//     .then( (text1) => {  
//         return fs.readFile('./texts/text2.txt' , 'utf-8')
//             .then((text2) => {
//                 const combinedText = `${text1} ${text2}`
//                 fs.writeFile('./texts/text3.txt' , combinedText , 'utf-8')
//             })
//         }).then( () => {
//             console.log('File has been updated!');
//         }).catch((err) => {
//             console.log(err);
//         })

// task 3
// let asyncFunction = async () => {
//     try {
//         let readFile1 = await fs.readFile('./texts/text1.txt' , 'utf-8')
//         let readFile2 = await fs.readFile('./texts/text2.txt' , 'utf-8')

//         const combinedText = `${readFile1} ${readFile2} `
//         let writeFile = fs.writeFile('./texts/text3.txt' ,combinedText , 'utf-8')
//         console.log("your file has been updated!");
//     } catch (error) {
//         console.log(error);
//     }
// }
// asyncFunction()






/////////////////////// server ///////////////////////////////

// const http = require('http')
// const url = require('url')
// const port = 7000
// const urlNum = '127.0.0.1'


// let server = http.createServer((request , response) => {
//     let reqUrl = request.url
//     if (reqUrl == "/javascript") {
//         console.log(reqUrl);
//         response.writeHead(200 , {
//             "content-type": 'text/html'
//         });
//         response.end(`<h1 style="color:green;">Here is your <span style="color:blue;">${reqUrl.slice(1)}</span> job.</h1>`)
//     } else if (reqUrl == "/react") {
//         console.log(reqUrl);
//         response.writeHead(200 , {
//             "content-type": 'text/html'
//         });
//         response.end(`<h1 style="color:green;">Here is your <span style="color:blue;">${reqUrl.slice(1)}</span> job.</h1>`)
//     } else if (reqUrl == "/nodejs") {
//         console.log(reqUrl);
//         response.writeHead(200 , {
//             "content-type": 'text/html'
//         });
//         response.end(`<h1 style="color:green;">Here is your <span style="color:blue;">${reqUrl.slice(1)}</span> job.</h1>`)
//     } else {
//         response.writeHead(404  , {
//             'content-type' : 'text/html'
//         });
//         response.end('<h1 style="color:red;">Page not found!</h1>')
//         // response.end('sorry this job is not avalible!')
//     }
// })

// server.listen(port , urlNum , () => {
//     console.log(`server is runing`);
// })


