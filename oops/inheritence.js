class user {
    constructor(username)
    {
        this.username=username;
    }
    logme()
    {
        console.log(`username is ${this.username}`)
    }
}
class teacher extends user {
    constructor(username,email,password)
    {
        super(username)
        this.email=email
        this.password=password
    }
        addcourse()
        {
            console.log(`A new course is added by ${this.username}`)
        }
    
}
const chai =new teacher ("saha", "@gmail.com" ,"123");
chai.addcourse();
const masalachai= new user("masalachai");
masalachai.logme()
console.log(chai==masalachai)
console.log(chai instanceof teacher)
console.log(chai instanceof user)

