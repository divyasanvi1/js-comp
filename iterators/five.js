const ar=["js","ruby","py"];

// forEach need callback function
ar.forEach(
    function (val){
        //console.log(val);
    }
)

ar.forEach((item)=>{
   // console.log(item);
})

//by passing function
function print(value)
{
   //console.log(value);
}
//arr.forEach(print);// give refrence not execute like print()

ar.forEach(
    function (val,arr,x){
        console.log(val,arr,x);// x is index // arr is array list
    }
)
//to access array of objects
const mycoding=[
    {
        languagename:"java",
        languagefile:"java"
    },
    {
        languagename:"javascript",
        languagefile:"js"
    }
]
mycoding.forEach((item) =>  
      { console.log(item.languagefile)}
)