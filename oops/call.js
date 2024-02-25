function setusername(username)
{
    this.username=username;
    console.log("called");
}

function createuser(username,email,password)
{
    setusername.call(this,username)
    this.email =email
    this.password=password
}

const chai=new createuser("divya","Abc@.com","123")
console.log(chai)