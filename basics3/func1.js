// ...  --> this is called spread operator as well as rest operator depending upon its use case
// use as rest operator
// function calculateCartPrice(...num)
// {
//     return num;
// }
// console.log(calculateCartPrice(200,300,400))
// function calculateCartPrice(val1,...num)
// {
//     return num;
// }
// console.log(calculateCartPrice(200,300,400)) // output 300 and 400 as 200 goes to val1

// how to pass object to function
const user={
    username:"divya",
    price:199
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//two types to call the function 1.by making object 2.directly
handleObject(user);
handleObject({
    username:"sam",
    price:399

});
//to get value in array
const myNewArray=[200,400,100,600]
function getSecondElement(getArray)
{
    return getArray[1];
}
console.log(getSecondElement(myNewArray));
console.log(getSecondElement([100,2000,3000,400]));