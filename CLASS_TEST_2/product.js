import express from "express";
const product = express();
product.use(express.json());

let items = [
    {id:1 ,name:"mouse" ,price:2000 ,inStock:true },
    {id:2 ,name:"keyboard" ,price:4000 ,inStock:false },
    {id:3 ,name:"joystick" ,price:3000 ,inStock:false },
    {id:4 ,name:"laptop" ,price:75000 ,inStock:true },
    {id:5 ,name:"printer" ,price:80000 ,inStock:true }
];

product.get("/items",(req,res)=>{
    res.json(items);
})
product.post( "/items" , (req,res)=>{
     let newItem = { 
      id:items.length + 1,
      name: req.body.name, 
      price:req.body.price,
      inStock:req.body.inStock 
    }; 
    items.push(newItem);
    res.json(items); 
  });
   product.put( "/items/:id" ,(req,res)=>{ 
    let newItem = items.find(p=>p.id==req.params.id); 
    newItem.name = req.body.name; 
    newItem.price = req.body.price; 
    newItem.inStock = req.body.inStock;
    res.send( `Item : ${newItem.name} added successfully!` ); 
    res.json((newItem)); 
  }) 
  product.delete("/items/:id", (req,res)=>{
    items = items.filter(p=>p.id != req.params.id);
    res.send(`Item deleted successfully!`);
  })
  product.listen(8000,()=>{ 
    console.log( "Server is running on http://localhost:8000" );
   })