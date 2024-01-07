const score=400;
console.log(score);

const balance=new Number(100);
console.log(balance);

console.log(balance.toString());// now after converting to string we can check length concate etc
console.log(balance.toFixed(2)); //to fix precision value after decimal

//toPrecision() -- this return a string and takes argument how many digit to be precisied and values can be between 1-21
const number2=112.454
console.log(number2.toPrecision(3));

//tolocaleString()
const hundred=1000000;
//with no arguments it convert with comma into us type ,for indian en-IN
console.log(hundred.toLocaleString('en-IN'));

//maths=================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3,4,8));
console.log(Math.max(4,5,6));


// random()
console.log(Math.random());
console.log((Math.random()*10)+1); // add 1 to avoid 0 as random() gives value between 0 and 1
console.log(Math.floor(Math.random()*10)+1); // round off to single

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);


