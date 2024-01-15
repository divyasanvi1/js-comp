//var c=300;
let a=300;
if(true)
{
    let a=20;
    const b=30;
    var c=30;
    console.log("inner a:",a);
}
console.log(a);// throws error as a is limited till scope of if
//console.log(b);// same reason as above
//console.log(c)// so avoid var as it is not limited to scope
