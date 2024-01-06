const sentence= "a lazy fox ";

//8.at()
console.log(`character at index ${sentence.at(5)}`);

//9.charCodeAt()
// it returns the utf-16 code at given index with value between 65535
console.log(`character at index ${sentence.charCodeAt(5)}`);

//10.codePointAt()
//it returns whole unicode with value greater than 65535
console.log(`character at index ${sentence.codePointAt(5)}`);

//11.concat()
//it concatenates two and return new string
const str2=new String("star");
console.log(str2.concat(' ',sentence));

//12.string constructor(); =>string function and constructor are different -- less clarity(to be done)

//13.endsWith()
// how a string is ending - important - 1st argument is the word which we want to find 
//2nd argument is the length of string till which we want to find
//important- space is taken care of
console.log(sentence.endsWith('fox '));

//14.isWellFormed() ot toWellFormed() --to be discussed

//15.lastIndexOf() --to be discussed

//16. localeCompare()

//17. match()

//18.matchAll()

//19.normalize()
//20.padEnd()
//21.padStart()
//22.repeat()
//23.replaceAll()
//24.search()
//25.startWith()
//26.substr() and subString()
//27.toLocaleLowerCase()
//28.toLocaleUpperCase()
//29.toString()
//30.valueOf()
//31. symbol()--important