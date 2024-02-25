
// class user {

//     constructor(username,email,password)
//     {
//         this.email =email
//         this.password=password
//         this.username=username  
//     }
//     encryptedpassword(){
//         return (`${this.password}abc`)
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai=new user("divya","Abc@.com","123")
// console.log(chai.encryptedpassword())
// console.log(chai.changeusername())

// behind the scene with function 

function user(username,email,password){
    this.email =email
    this.password=password
    this.username=username  
}
user.prototype.encryptedpassword=function(){
    return (`${this.password}abc`)
}

user.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}
const chai=new user("divya","Abc@.com","123")
console.log(chai.encryptedpassword())
console.log(chai.changeusername())

