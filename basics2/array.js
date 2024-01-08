//array can contain multiple elements and are resizable
const myarr=[0,1,2,3,4,true,"divya"];
const myarr2= new Array(1,2,3,4);
// console.log(myarr2[2]);

// //array methods
// myarr2.push(6);
// console.log(myarr2);

// myarr2.pop();//remove last array element
// console.log(myarr2);

// myarr2.unshift(9);// add element to the first index of array
// console.log(myarr2);

// myarr2.shift();// removes the element at index 0

// console.log(myarr2.includes(9)); // return boolean type
// console.log(myarr2.indexOf(9)); // -1 

// //join()
// const newarr=myarr2.join();// converts array into string
// console.log(newarr);
// console.log(typeof newarr);
// console.log(myarr2);

// slice and splice
console.log("A" ,myarr2);

const myn1=myarr2.slice(1,3);// in slice 1 included while 3 excluded and slice creates a shallow copy of arry that
//swhy it doesnot modify the orginal array
console.log(myn1);
console.log("B" ,myarr2);

const myn2=myarr2.splice(1,3);
// it doesnot create copy and because arrays in js are refrence values so it modifies the original array
console.log(myn2);
console.log("C" ,myarr2);