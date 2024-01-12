//functions

function sayMyName()
{
    console.log("D");
    console.log("i");
    console.log("v");
    console.log("y");
    console.log("a");
}
//sayMyName() --this is function's execution
//sayMyName -- this is function's refrence
// sayMyName;
// sayMyName();
// function addTwoNumbers(num1,num2)
// {
//     console.log(num1+num2)
// }
// addTwoNumbers(5,8)
// addTwoNumbers(5,"8")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)
// const result=addTwoNumbers(5,3)// func prints 8 but no return to result 
// console.log("result", result)   // result is undefined as we haven't returned anything to the result 

// function addTwoNumbers(num1,num2)
// {
//     let result=(num1+num2)
//     return result
//    // console.log("divya") // this will never be excecuted as function does no work after return 
//    //return num1+num2 --2nd method to return 
// }
// const result=addTwoNumbers(5,3)
// console.log("result", result) 

function loginMessage(username)
{
    if(username===undefined)
    {
        console.log("please enter a user name")
        return
    }
    return `${username} Just logged in`
}
console.log(loginMessage("divya")); // loginMessage() got the value returned by function then we print the value
console.log(loginMessage()); // when we pass no value then undefined is there in place of username
//"" ==empty string treated as false value
// undefined is false value
// so if(!username) can also be used in ifstatement
// function loginMessage(username="sam")
// {
//     if(username===undefined)
//     {
//         console.log("please enter a user name")
//         return
//     }
//     return `${username} Just logged in`
// }
// if you dont want the user to simply enter the empty value then you can assign the username="sam" as parameter
//so each time you call by passing name as argument then that simply overwrites the username and fuunction gets executed
