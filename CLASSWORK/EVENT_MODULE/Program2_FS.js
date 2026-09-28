const fs = require("fs");
//CREATE FILE
fs.writeFileSync("student.txt", "Name : Keerti\nRoll no. : 46");          //using sync
fs.writeFile("student.txt", "Name : Keerti\nRoll no. : 46",(ans)=>{      //using async thus promise and callback
    if(ans){
        console.log(ans);
    }else{
        console.log("File Created Successfully!");
    }
});

// //READ FILE
let data = fs.readFile("student.txt", "utf8", (err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data); 
    }
});
console.log("\n File content");
console.log(data);

// //UPDATE FILE
// fs.appendFile("student.txt", "\n Course : B.Tech CSE");
// console.log("\nFile updated successfully");

// //DELETE FILE

