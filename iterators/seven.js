const mynums=[1,2,3,4,5,6,7,8,9]
//const newnums=mynums.map((num) => num+10) to add 10 to each value of array

//chaining
const newnums=mynums
             .map((num) => num*10)
             .map((num) => num+1) // here 10+1 as num value 10 will be passed here
             .filter((num) => num >= 40) // you can do multiple chaining
console.log(newnums);