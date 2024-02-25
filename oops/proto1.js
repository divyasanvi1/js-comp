let myheroes=["thor","spiderman"]
let divs=["hjf","klj"]
let heropower={
    thor:"jump",
    spiderman:"sling",
}
Object.prototype.divya=function()
{
    console.log(`divya is present in all objects`);
}

// divs.divya()
Array.prototype.hidivya=function()
{
    console.log(`hi divya`);
}
//heropower.hidivya() --error


//inheritance
const user={
    name:"chai",
}
const teacher={
    makevideo :true,
}
const ta={
    makeassignment :"js",
    __proto__:teacher
}
teacher.__proto__=user

//modernsyntax
Object.setPrototypeOf(ta,teacher);

const username="chaiaurcode   "
String.prototype.truelength=function(){
    console.log(this)
    console.log(this.trim().length)
}
username.truelength()
"divya".truelength()