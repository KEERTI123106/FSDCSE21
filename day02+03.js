//SYNCHRONOUS AND ASYNCHRONOUS JAVASCRIPT
//Synchronous prog.

// console.log("good morning!");
// function hello(){
//    console.log("hi,there!");
// }
// hello();
// console.log("it is a synchronous programming.");

//Asynchronous prog.  ->waits for one task to be executed to execute other task afterwards

// const hello = () =>{
//     setTimeout(() => {
//         console.log("good morning");
//     },2000);
// }
// hello();
// console.log("asynchronous");

//TO EXECUTE ASYCH. WE HAVE CALLBACK(function as ar. in other function),PROMISES,ASYNC/AWAIT

                                          //CALLBACK
// function add(m ,n, callback){
//     console.log(m+n);
//     callback();       
// }
// let a=10;
// let b=20;
// add(a,b,sayHi);   passing variable and fn


// function hi(c1,c2){
//     c1();
//     c2();
// }
// hi(sayHi,good);   passing 2 fn
// function sayHi(){
//     console.log("this is callback function");
// }

// function good(){
//     console.log("it's keerti");
// }


//TASK: to create a fn to display "Welcome to ABES" and calling another fn saying "FSD in cse21"
//function display(call){
//     console.log("Welcome to ABES");  //first this prints
//     call();                          //then fn gets called
// }
// display(msg);   //here calling another fn in fn

// function msg(){
//     console.log("FSD in CSE 21");
// }
                                         //PROMISES  -> it is an obj
//asynchr js me fulfill , pending , reject
//in fetch api, we don't use promises directly but bts
//for resolve use .then() method and for reject use .catch() method

// const prom = new Promise((resolve , reject) => {                    //syntax 1 to write promise
//           console.log("promise is here");
//           let a = false;
//           let b = true;
//           if(a==b){
//             resolve("successfull");
//           }else{
//             reject("error");
//           }
// })
// prom.then((result)=>{                    //using callback fn passing fun in then and catch
//     console.log(result);
// }).catch((error)=>{

//     console.log(error);
// })                                   

