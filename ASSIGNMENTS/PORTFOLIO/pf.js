import express from "express";
import fs from "fs";
const pf = express();
const PORT = 3000;
pf.use(express.static("sites_frontEnd"));
pf.get('/',(req,res)=>{
   fs.readFile('./sites_frontEnd/home.html','utf-8',(err,val)=>{
         if(err){
           res.status(500).send("Error in reading file"); 
           return;
         }else{
            res.send(val);
         }
   });  
});

pf.get('/contact',(req,res)=>{
   fs.readFile('./sites_frontEnd/contact.html','utf-8',(err,val)=>{
         if(err){
           res.status(500).send("Error in reading file");
           return; 
         }else{
            res.send(val);
         }
   });  
});

pf.get('/exp',(req,res)=>{
   fs.readFile('./sites_frontEnd/experience.html','utf-8',(err,val)=>{
         if(err){
           res.status(500).send("Error in reading file"); 
           return;
         }else{
            res.send(val);
         }
   });  
});

pf.get('/skill',(req,res)=>{
   fs.readFile('./sites_frontEnd/skills.html','utf-8',(err,val)=>{
         if(err){
           res.status(500).send("Error in reading file");
           return;
         }else{
            res.send(val);
         }
   });  
});

pf.listen(PORT,()=>{
    console.log("Server is running on http://localhost:3000");
});