//by default , will use callback in async
//CREATE ONE PROMISE THAT WILL DISPLAY USER NAME AND PASSWORD USING RESOLVE AND IF DATA WILL BE REJECTED IT DISPLAYS ERROE MESSAGE

// new Promise((resolve,reject) => {
//        setTimeout(()=>{
//         let err = false;
//         if(!err){
//             resolve("username:KEERTI SHARMA & passkey:2145");
//         }else{
//             reject("there is an error");
//         }
//        },2000)

// }).then((result)=>{                               //we have to provide one param. for then and catch otherwise no output from promise fn
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

                                //ASYNC/AWAIT           (await always for asynchronous fn)
//when we use fetch we use AWAIT in case of ASYNCHRONOUS because we fetch large data

console.log("this is async/await");

async function test(){
    console.log("1");
    console.log("2");
    await console.log("3");     //here await function keep next element on hold
    console.log("4");  
}
test();
console.log("6");

