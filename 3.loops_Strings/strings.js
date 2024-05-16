// let str = "My Name is Ankit";
// let str2 = 'What is your name ?';

// //string length
// // str_name.length;

// console.log(str.length);
// console.log(str2.length);

// //string indices
// //str_name[i];

// console.log(str[15]);
// console.log(str2[15]);



//Template Literals in JS
// A way to have embedded expressions in strings

// let sentence = `Hello World`;//special string
// console.log(sentence);
// console.log(typeof sentence);


// //Example
// let obj = {
//     item:"pen",
//     price: 10
// };

// let output = `The cost of ${obj.item} is ${obj.price} rupees.`
// console.log(output);
// console.log("The cost of",obj.item,"is",obj.price,"rupees.");

//string interpolation - to create strings by doing 
// substitution of placehokders
// `string text ${expression} string text`

// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString); 

// console.log("first string");
// console.log("2nd\nstring");
// console.log("3rd\tstring");//not working tab



// // String Methods in JS
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str = "         My Name is Ankit     ";//string needs to be trimmed
// console.log(str.trim());

// let str = "6546324263";
// console.log(str.slice(2,7));

// let string = "Hello";
// console.log(string.slice(0,4));

// let str1 ="Hello";
// let str2 =" World";
// let result = str1.concat(str2);
// console.log(result);
// let op = "I'm Printing "+str1+str2;
// console.log(op);


//in JS strings are immutable


// let str = "Hello";
// console.log(str.replace("H","Y"));
// console.log(str.replace("Hel","Ye "));


// let str = "I love Coding";
// console.log(str.charAt(5));

//Qs1. Prompt the user to enter their full name. Generate a
// username for them based on the input. Start username with 
// @, followed by their full name and ending with the fullname
// length

// let fullname = prompt("Enter your name:");
// let fullnameLength = fullname.length;
// let str = "@";
// // let username = str+fullname+fullnameLength;
// let username = str.concat(fullname.concat(fullnameLength));
// alert("Your username is: " + username);








