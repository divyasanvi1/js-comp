// object constructor

const tinderUser={};  //non singleton
// //const tinderUser=new Object();// singleton
// // the above both are the way to declare object and both outputs the empty object  no internal diffrence but only diffrence between them is 
// //one is singleton and other is non singleton
tinderUser.id="123qwe";
tinderUser.name="sam";
// //console.log(tinderUser);

// //object nested under object
// const regUser={
//     email:"some@gmail.com",
//     fullName:{
//         userName:{
//         firstName:"divya",
//         secondName:"sanvi",
//         }
//     }
// }
// console.log(regUser.fullName.userName.firstName);//use question mark to check whether the value at this level exits or not fullName?
// //this is called as optional chaining

// const obj1={1:"a", 2:"b", 3:"c"};
// const obj2={4:"d", 5:"e"}

// //const obj3={obj1,obj2};// this simply put two object inside third
// //const obj3=Object.assign({},obj1,obj2);// {} this do nothing just same output without {} also --optional but we should  give this because
// //if we assign without {} then it is considered that obj3===obj1 as obj2 is concatenated into obj1
// //but if we use {} then obj3!==obj1 ans it is considered that the two object inserted into {}
// //const obj3=Object.assign(obj1,obj2);

// //90% of time we will use spread concept
// const obj3={...obj1, ...obj2}; // here obj3!==obj1
// //console.log(obj3===obj1);

// console.log(obj3);


// how we use when object or data comes from database
const user=[
    {
        id:1,
        email:"d@gmail.com",
    },
]
console.log(user[0]); // to access the object nested in the array or object in the array
console.log(user[0].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser));// it returns all the keys in array
console.log(Object.values(tinderUser));// all values in array
console.log(Object.entries(tinderUser));// very less often uses --return all key value pair as array inside array
console.log(tinderUser.hasOwnProperty('id'));// to check whether the key is present or not in the object