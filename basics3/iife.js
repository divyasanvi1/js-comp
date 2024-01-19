// immediately invoked function expression (iife)
// mainly iife used to avoid pollution from global scope as global scope can cause problem inside a function's scope
// iife also used to do immediate exection of functions

(function chai()
{   
    // this is NAMED iife as it has name function chai()
    console.log(`DB connected`)
}) (); // ; colon must be used to end the excecution of program as program doesnot know where to terminate
// ()-- used to wrap function inside it and then other () used for execution call
//chai()

( (name) =>
{    
    // this is UNNAMED iife as it has no name 
    console.log(`DB connected Two ${name}`)
}) ("divya");