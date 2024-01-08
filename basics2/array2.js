// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros)
// // push means existing array m push kr rhe h.
// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// // const allHeros = marvel_heros.concat(dc_heros)
// // console.log(allHeros);
// //in concat we are returning a new array

// const all_new_heros = [...marvel_heros, ...dc_heros]

// // console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const arr=another_array.flat(Infinity); //opens all brackets
console.log(arr);

//isArray() ==whether array or not
console.log(Array.isArray("divya"));
console.log(Array.from("divya"));
console.log(Array.from({name:"divya"}));// interesting --to specify whether make array of key or value unless it will return empty array

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

console.log(new Array(10));//makes an array of 10 elements each of them will be undefined
console.log(Array.of(10));// makes an array of 10