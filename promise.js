// const promiseone = new Promise(function(resolve,reject)
// {
//     //do an async task
//     //DB calls, cryptography, network
//     setTimeout(function() {
//         console.log('Async task is complete');
//         resolve();
//     }, 1000);
// })
// promiseone.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//       console.log("async task 2");
//       resolve();
//     },1000)
// }).then(function(){
//   console.log("async 2 resolved "); 
// })
// const promiseThree=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//       resolve({username :"chai",email :"@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
// })

// const promisefour=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         let erroe=true;
//         if(!erroe)
//         {
//             resolve({username :"divya",email :"@gmail.com"})
//         }
//         else
//         {
//             reject("error");
//         }
      
//     },1000)
// })
// promisefour
// .then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((erroe)=>{
//     console.log(erroe);
// })
// .finally(()=>{console.log("promise is either resolved or rejected")});


// const promisefive=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         let erroe=true;
//         if(!erroe)
//         {
//             resolve({username :"js",email :"@gmail.com"})
//         }
//         else
//         {
//             reject("error js");
//         }
      
//     },1000)
// })
// async function consumepromisefive(res){
//     try{
//         const response=await promisefive;
//         console.log(response);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
   
//    // console.log(res);
// }
// consumepromisefive();




// async function getusers(){
   
//    try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//    const data=await response.json();
//    console.log(data);
//    }
//    catch(error)
//    {
//     console.log("erroe");
//    }
// }
// getusers()

// .then format
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
}).then((data)=>
{
    console.log(data);
})
.catch((error)=> console.log("error"));

