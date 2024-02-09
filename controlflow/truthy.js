const useremail="divya@gmail.com";
const useremail1="";// false
const useremail2=[];//true
if(useremail)
{
    console.log("yes");
}
else
{
    console.log("No");
}

//falsy values

// 1.false
// 2.0
// 3.-0 //interview
// 4. BigInt 0n // interview
// 5.""
// 6.null
// 7.undefined
// 8.NaN

// everything except this is truthy value

//some truthy values
//1."0"
//2.'false'
//3." "
//4.[]
//5.{}
//6.function(){}

//to check array is empty
if(useremail2.length===0)
{
    console.log("Array is empty");
}

//to check obj
const emptyobj={};

if(Object.keys(emptyobj).length===0)
{
    console.log("obj is empty");
}
//Object.keys(emptyobj) - forms an array

// false ==0 //true
// false=='' true
// 0=='' true

//nullish coalescing operator (??) : null ,undefined // database uses mainly
val1= 5 ?? 10;
val1= null ?? 10;
val1= undefined ?? 10;
val1= null ?? 10 ?? 20;
console.log(val1);
