const http= require('http');
const url=require('url');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('hello from home page')
    }
});
server.listen(5000);