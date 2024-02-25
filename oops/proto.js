//eveything is object in javascript

// array->object->null
// string->object->null
//function->object->null

//example- function is also object
// function multiplyby5(num){
//     return num*5;
// }
// multiplyby5.pow=2;
// console.log(multiplyby5(5));
// console.log(multiplyby5.pow);
// console.log(multiplyby5.prototype);

function createuser(name,price)
{   
    this.price=price;
    this.name=name;
}
createuser.prototype.increment=function()
{
    this.price++;
}
createuser.prototype.printme=function()
{
    console.log(`price is ${this.price}`);
}

const chai=new createuser("chai",25)
const tea=createuser("tea",250)
chai.printme()