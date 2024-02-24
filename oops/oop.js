// const user={
//     username:"divya",
//     logged:8,
//     signedIn:true,
//     getuser : function()
//     {
//         // console.log("got details");
//         // console.log(this.username);
//         console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getuser());
//console.log(this); output {} -nothing in global context
//in browser return window object

//const promiseone= new promise() new- constructor

function user(username,logcount){
    this.username=username;
    this.logcount=logcount;
    return this;
}
// const userone=user("divya",12)
// const usertwo=user("div",1)// this can overwite the function valus
//so we use new keyword for creating new instance
//or it give copy of instance to the new object
const userone=new user("divya",12)
const usertwo=new user("div",1)
console.log(userone);
console.log(userone.constructor);
console.log(usertwo);