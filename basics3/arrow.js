const user={
    username: "divya",
    price: "999",

    welcomemessage: function()
    {
        console.log(`${this.username}, Hi welcome to the website`)
        //console.log(this) -- this --current context
    }
}

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()


// interview ----
//console.log(this); // current context is {} but in node environment
// in browser environment it will output the global objects -- inside windows global objects are window object

//important ============
// function chai(){
//     //console.log(this)//  -- this outputs the global object inside function 
//     const username="divya"
//    // console.log(this.username); -- this outputs undefined as this works only inside the function
// }
// chai()

// const chai= function()
// {
//     let username="diya"
//     console.log(this.username) //undefined
//     // console.log(this) -- object[global]
// }
// chai()

// const chaii= () =>
// {
//     let username="diya"
//     let car="suv"
//     // const chai={
//     //     name:"divya",
//     // }
//     // console.log(this.username) //-- undefined
//     // console.log(this) // == {} with the object values it prints also {}
// }
// chaii()

// == arrow function

//explicit return == return keyword is used
// const addtwo=(num1,num2) =>{
//        return num1+num2;
// }

//implicit return 
//const addtwo=(num1,num2) => num1+num2;
//const addtwo=(num1,num2) => (num1+num2); //() this will work without return as it is under () not {}
const addtwo=(num1,num2) => ({username:"divya"}); // to return object you have to wrap inside () it will return undefined otherwise
console.log(addtwo(3,4));