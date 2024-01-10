// two types to declare an object
//--1.literal
// 2. constructor

//singleton if formed when we declare object using constructor

// object literals
//symbol
const mysym=Symbol("key");
const jsUser={
    name:"divya", // these are keys and values and name is understandable as "name" or we can say as string by js
    "full name":"divya sanvi",
    //mysym:"mykey",
    [mysym]:"mykey",
    // both mysym will give same output  mykey but type of mysym is string and [mysym] is symbol
    age:18,
    location:"dehradun",
    email:"divya@google.com",
    isLoggedIn: false,
    loginDays :["monday","saturday"]
}

//two ways to access object
// console.log(jsUser.name);
// console.log(jsUser["name"]);

// // we should use 2nd method always because all keys internally treated as string but if key is given by developer as
// //string then [""] is the only to access object
// console.log(jsUser["full name"]);
// console.log(jsUser["mysym"]);
// console.log(jsUser[mysym]);
// console.log(typeof jsUser["mysym"]);
// console.log(typeof jsUser[mysym]);// it outputs string but it should be symbol
// console.log(jsUser);// here mysym comes written as symbol

// ways to alter or rewrite data
jsUser.email="divyasav@icloud.com"; // we can easily change the data with just rewritting ovwr the data

// how to freeze data so that no one can change the data further
// Object.freeze(jsUser);
// jsUser.email="divyasav@meta.com";
// console.log(jsUser);// no change in mail id 

jsUser.greeting=function()
{
    console.log("Hello js user");
}
jsUser.greetingtwo=function()
{
    console.log(`Hello js user ,${this.name}`);// this is used to refer the keys of object
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
console.log(jsUser.greeting);// it gives only refrence of function


