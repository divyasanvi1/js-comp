const name="divya";
const repocount=80;

//console.log(name+repocount+"value"); --not used in modern days


// string interpolation --used in modern days
// console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repocount}`); //backtics
// we can also add some methods or functions here inside $ as we want name in upper case .

// 2nd method to initialize string is 
const gamename=new String('aldano-com-dot'); // if we run this in console then we will get output as well as with some methods
// string is not an array its an object, but indexing is like array

//to access key value pair
// console.log(gamename[0]);
// console.log(gamename.__proto__); // to access string prototype methodbut there is no need to write __proto__.methodnames always we can directly
//access the methods like of length etc.
// console.log(gamename.length);

//some more methods
//1. to check which character at given position
console.log(gamename.charAt(2));
//2. to check index of given character
console.log(gamename.indexOf('a'));

//3.substring
console.log(gamename.substring(1,3));// this ignores negative values

//4.slice
console.log(gamename.slice(-6,4));

//5.trim-- there is trim.start() as well as trim.end() and it works on white spaces and line terminators
// there is need when user delibrately enters whitespaces while entering names,emails etc
console.log(gamename.trim());

//6.replace 
//suppose in a url there is spaces but browser doesnot understands spaces so browser will convert the spaces into url coding
//like remove spaces with %20 and then if want to replace the % character with - then we use replace

const url="https://divya.com/divya%20sanvi";
console.log(url.replace('%20','-'));

// 7.includes
console.log(url.includes('divya'));
console.log(url.includes('cat'));

//convert string into array -- split()
console.log(gamename.split('-',2)); // first agrument=> separator , second argument=>limit


