//var c=300;
//let a=300;
if(true)
{
    let a=20;
    const b=30;
    var c=30;
    console.log("inner a:",a);
}
//console.log(a);// throws error as a is limited till scope of if
//console.log(b);// same reason as above
//console.log(c)// so avoid var as it is not limited to scope

function one()
{
    const username="divya";
    function two()
    {
        const web="youtube"
        console.log(username);
    }
   // console.log(web) this will throw error as it outside its scope
    two();
}
one()

if(true)
{
    const username="divya";
    if(username==="divya")
    {
        const web="youtube";
        console.log(username+web);
    }
    //console.log(web); --out of scope
}
//console.log(username); --out of scope

//==============intresting============


console.log(addone(5));  // we can call addone before defining the function
function addone(nums)
{
    return nums+1;
}

const addtwo=function(nums)
{
    return nums+2;
}
console.log(addtwo(5)); // we will always call the function after declaring the function as we have stored the function in
//a variable