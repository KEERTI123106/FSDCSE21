//UNDERSTANDING THE CONCEPT OF FETCH IN CONSOLE
async function test(){
   console.log("this is asynchronous function and we want to use fetch()");
    const response = await fetch("./studen.json");    //providing path of json file
    console.log(response.status);     //checking status of response
    
    const stud = await response.json();      //saving response in variable
    return stud;                              //will be shown in console in browser
    console.log("finally data fetch");
    
}
test().then((res)=>{                            //using promise
    console.log(res);                        
}).catch((err)=>{
    console.log(err);
})


//in asynchr. func, we use promises 