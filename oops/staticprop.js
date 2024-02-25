class user {
    constructor(username)
    {
        this.username=username;
    }
    static createid(){
        return 123;//static used to restrict the functionality given to every instance of user

    }
}
const hitesh=new user("hitesh");
//console.log(hitesh.createid())
class teacher extends user{
    constructor(username,email)
    {   
        super(username);
        this.email=email;//super need to call before this why check chatgpt
        
    }
}
const chai=new teacher("chai","chai.com")
console.log(chai.createid())