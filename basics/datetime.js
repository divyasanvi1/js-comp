let myDate= new Date();
// console.log(myDate);//not readable
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate=new Date(2024,0,7);
// months in javascript starts with 0 but when we write in format of dd/mm/yy months starts with 01
console.log(myCreatedDate.toDateString());

let myCreatedTime=new Date(2024,0,7,5,3);
// localestring() shows time also as 5 and 3 are agruments of time
console.log(myCreatedTime.toLocaleString());

//timeStamp()
let myTimeStamp=Date.now();
console.log(myTimeStamp);// time in milisecond

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));// to get time coverted insecond from  milisecond

 console.log(myDate.getMonth());
 console.log(myDate.getDay());

// myDate.toLocaleString('default',{
//     weekday:"long",
// }) -- to be covered 