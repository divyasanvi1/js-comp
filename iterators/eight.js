//reduce
const mynum=[1,2,3]

// const newnum=mynum.reduce(function(acc,curval){
//         console.log(`acc ${acc}, curval ${curval}`)
//         return acc+curval;
// },0)
// const newnum=mynum.reduce((acc,curr) => (acc+curr),0)
// console.log(newnum);

const cart=[
    {
        itemname:"js",
        itemprice:999
    },
    {
        itemname:"j",
        itemprice:1999
    }
]
const mytotal=cart.reduce((acc,item)=>(acc+item.itemprice),0)
console.log(mytotal);