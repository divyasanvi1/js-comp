//for of
//[" ", " "," "]
//[{}, {}, {}]
const arr=[1,2,3,4]
for(const num of arr)
{
   // console.log(num);
}

// map
//unique values
// same order as inserted
const map=new Map();
map.set('IN',"india");
map.set("fr","france");
map.set('IN',"india");
//console.log(map);
for(const [key,value] of map)
{
    console.log(key , ":-" , value);
}

// for of is not iteratable for objects