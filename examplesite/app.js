const http = require('http')

const app = http.createServer(
    (req, res)=>{
        if(req.url == '/'){
            res.writeHead(200, {'Content-Type': "text/plain"})
            res.end("stuff not working fine")
        }
        console.log(req)
    }
)

app.listen(3001, ()=>console.log('started'))