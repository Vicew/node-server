const http = require('http')
const server = http.createServer((req, res)=>{
  if(req.method === 'POST'){
    console.log('content-type', req.headers['content-type'])
    console.log(req.url)
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end',() => {
      console.log(postData)
      res.end('hello world')
    })
  }
})
server.listen(8000)
console.log('ok')