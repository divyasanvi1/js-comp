// ...  --> this is called spread operator as well as rest operator depending upon its use case
// use as rest operator
// function calculateCartPrice(...num)
// {
//     return num;
// }
// console.log(calculateCartPrice(200,300,400))
function calculateCartPrice(val1,...num)
{
    return num;
}
console.log(calculateCartPrice(200,300,400)) // output 300 and 400 as 200 goes to val1

// how to pass object to function
function handleObject(anyobject)
{
    console.log(`username is $(anyobject.user)`)
}