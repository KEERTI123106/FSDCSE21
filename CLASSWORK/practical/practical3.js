import http from 'http'
const server = http.createServer((req,res)=>{
      res.writeHead(200,{"content-type":"text/html"}) ;
      res.write("<h1>Hello World...</h1>");
      try{
        res.writeHead(403,{"content-type":"text/html"});
      }
      catch(err){
        res.write(`${err}`);
        
      }
      res.end("<h2>Error ....  Message .... Found</h2>");
});
server.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})