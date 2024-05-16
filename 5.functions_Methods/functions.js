// function myFunction() {
//     console.log("Hello World!");
//     console.log("Wake Up to the reality!");
// }
// myFunction(); // calling or invoking a function

// function mszFunction(msz,n) {
//     console.log(msz,n);
// }
// mszFunction("You need code regularly",100);

// function sum(x,y) {
//     console.log(x + y);
// }

// function sum(x,y) {
//     s = x + y;
//     return s;
// }
// let val = sum(3,4);
// console.log(val);

// //sum function
// function sum(a,b){
//     return a + b;
// }

// //multiply function
// function multiply(a,b){
//     return a * b;
// }

/*-------------------------Arrow function--------------------------*/
// const arrorSum = (a,b) =>{
//     return a + b;
// }

// const arrowMultiply = (a,b) =>{
//     return a * b;
// }

// Qs. Create a function that takes a string as an argument
// and returns the number of vowels in the sting.

// let str = prompt("Enter a string");
// let count = 0;
// function vowels(str) {
//   console.log(str);
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "A" ||
//       str[i] === "e" ||
//       str[i] === "E" ||
//       str[i] === "i" ||
//       str[i] === "I" ||
//       str[i] === "o" ||
//       str[i] === "O" ||
//       str[i] === "u" ||
//       str[i] === "U"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// vowels(str);

// // let str = prompt("Enter a string");
// const countVow = (str) =>{
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === 'a' ||
//             char === "A" ||
//             char === "e" ||
//             char === "E" ||
//             char === "i" ||
//             char === "I" ||
//             char === "o" ||
//             char === "O" ||
//             char === "u" ||
//             char === "U"
//         ){
//             count++;
//         }
//     }
//     return count;
// };

//A callback is a function passed as an argument to another
//function

/*// let arr = [1,2,3,4,5,6,7];
// arr.forEach(function printVal(val){
//     console.log(val);
// });*/

// let arr = ["pune","mumbai","goa","raipur"];
// arr.forEach((val,idx,arr)=>{
//     // console.log(val);
//     console.log(val.toUpperCase(),idx,arr);
// });

//Higher order functions - functions which can take other
//functions as parameters and also can return other functions

// Qs. given array of numbers , print the square of each
// value using the forEach loop.

// let arr = [1, 2, 3, 4, 5,6,7];
/* 
arr.forEach(function printVal(val) {
   console.log(val*val);
});
*/

/*
arr.forEach((val)=>{
    console.log(val**2);
});
*/
/*
let nums = [1, 2, 3, 4, 5,6,7];
let calcSquare = (num) =>{
    console.log(num*num);
};
nums.forEach(calcSquare);*/


////Map method
// let nums = [1, 2, 3, 4, 5,6,7];
// nums.map((val) => {
//     console.log(val);
// })

/*let nums = [1, 2, 3, 4, 5,6,7];
let newArray = nums.map((val) => {
    return val;
})
console.log(newArray);*/

/*
//Filter method

let nums = [1, 2, 3, 4, 5,6,7];
let evenArray = nums.filter((val) => {
    return val%2 === 0;
});
console.log(evenArray);
*/

/*
//Reduce Medthod
let arr = [1,2,3,40,5];

const sum = arr.reduce((res,cur) =>{
    return res+cur;
});

const largest = arr.reduce((res,cur) =>{
    if (res>cur) {
        return res;
    }
    else{
        return cur;
    }
});

console.log(sum);
console.log(largest);
*/

// Qs. given array of marks filter out marks of student that
// scored 90+

// let marksOfStudent = [87,65,75,68,69,67,93,89,80,90,98];
// let nintyPluseMarksOfStudent = marksOfStudent.filter((val) =>{
//     return val >= 90;
// });
// console.log(nintyPluseMarksOfStudent);

// Qs. take a number n as input from user create an
// array of numbers from 1 to n 
//use reduce to calculate sum of numbers
//use reduce to calculate product of numbers

// let n = prompt('Enter a number');
// let arr = [];
// for (let i = 0; i <= n; i++) {
//     arr[i-1]=i;
// }
// const sum = arr.reduce((res,cur) =>{
//     return res+cur;
// });
// console.log(sum);
// const product = arr.reduce((res,cur) =>{
//     return res*cur;
// });
// console.log(product);

