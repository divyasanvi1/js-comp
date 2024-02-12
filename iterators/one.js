//for

for (let index = 1; index <=20; index++) {
    if(index==5)
    {
        console.log(`detected`);
        break;
    }
   
    console.log(`value of i is ${index}`);
    
}
for (let index = 1; index <=20; index++) {
    if(index==5)
    {
        console.log(`detected`);
        continue;
    }
   
    console.log(`value of i is ${index}`);
    
}