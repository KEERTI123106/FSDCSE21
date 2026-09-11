//use of HTTP -> providing content/response from server to user
//METHOD ->CREATE SERVER ->
//as response to reach somewhere , we need server's port number

//import http from 'http';         if using module then use IMPORT    

//CREATING MY OWN SERVER USING HTTP MODULE WITHOUT IMPORT
//const http = require('http');

//in networking HEAD contains port number, ip address etc.

//CREATING OWN SERVER2
const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-Type" : "text/plain"});
    res.write("<h1>Welcome to my server.</h1>");
   //res.write('My name is Keerti');
   res.end();       //ending a response is mandatory
})

server.listen(8000,()=>{
    console.log("server is running on port 8000");
})

