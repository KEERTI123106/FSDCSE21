//practice routing using http module

import http from "http";
const server = http.createServer((req,res)=>{
       res.writeHead(200, {"content-type" : "text/html"});
       if(req.url === "/"){
           res.end("<h1>this is home page.</h1>"); 
       }  
       else if (req.url === "/about"){
        res.end("<h1>this is about page</h1>");
       }
       else if(req.url === "/contact"){
        res.end("<h1>this is contact page : +91-124785962</h1>");
       }
});
server.listen(3001,()=>{
    console.log("server working on 3001");
})
