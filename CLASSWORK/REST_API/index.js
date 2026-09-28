import express from "express" ;
 const app = express();
  app.use(express.json());
   let users = [ 
    {id:1, name: "keerti" , email : "A@gmail.com" }, 
    {id:2, name: "deep" , email : "D@gmail.com" } 
  ]; //API => REST and GraphQL ;DRAWBACK OF REST API => because gives all data instead of particular
  
  //GET : FETCH USER DATA 
  app.get( "/users" ,(req,res)=>{
     res.json(users); 
    });
     
  //POST : CREATE NEW USER DATA
  app.post( "/users" , (req,res)=>{
     let newUser = { 
      id:users.length + 1,
      name: req.body.name, 
      email:req.body.email 
    }; 
    users.push(newUser);
    res.json(users); 
  });
   app.put( "/users/:id" ,(req,res)=>{ 
    let newUser = users.find(u=>u.id==req.params.id); 
    newUser.name = req.body.name; 
    newUser.email = req.body.email; 
    res.send( "User updated successfully!" ); 
    res.json((newUser)); 
  }) 
  app.delete("/users/:id", (req,res)=>{
    users = users.filter(u=>u.id != req.params.id);
    res.send("User deleted");
  })
  app.listen(5000,()=>{ 
    console.log( "Server is running on http://localhost:5000" );
   })