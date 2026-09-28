const http = require ('http');
import fs from "fs/promises";
const port = 3000;
async function create(){
    try{
        await fs.writeFile(
            fileName,
            "Name: Keerti \n Class: CSE21","utf8"
        );
        console.log("File created successfully.");
    }
    catch(error){
        console.log("error: ",error.message);
    }
}

async function update(){
    try{
        await fs.appendFile(
            fileName,
            "\n course: B.Tech.....","utf8"
        );
        console.log("\n File updated successfully.");
    }
    catch(error){
        console.log("error: ",error.message);
    }
}
const server = http.createServer("",(res,req) => {
    res.writeHead(200, {"content-Type" : "text/plain"});
     res.end();
})

server.listen(8000,()=>{
    console.log("server is running on port 8000");
})
