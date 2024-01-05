// comaprison of same datatype
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
//console.log("2">"1"); true // automatically converted into num

//comparison of different datatype
//typescript doesnot allows this
// console.log("2">1);// automatically 2 converted to number
// console.log("02">1);

// controversial( avoid them)
// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//true
// this is because equality check and comparison operator works differently
//comparison convert null to a number, treating it as 0.

// undefined in place of null always give false


// === 
//strictly check
// this also checks datatypes
