// let marks = [99,56,87,96,90];
// console.log(marks);
// console.log(marks.length);
// marks[0] = 49;
// console.log(marks);

// let heros = ["iron_man","thor","bat_man","spider_man","ant_man"];

// for (let i = 0; i < heros.length; i++) {
//     console.log(heros[i]);
// }
// for(let hero of heros) {
//     console.log(hero);
// }

// let cities = ["delhi","pune","bhubaneswar","hyderabad","gurgaon"];
// for (let city of cities){
//     console.log(city.toUpperCase());
// }




// let prices = [250,645,300,900,50];


// let i = 0;
// for(let val of prices){
//     // console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     prices[i] = prices[i] - offer;
//     console.log(`value after offer = ${prices[i]}`);
//     i++;
// }//to track index


// let offerPrice = [];
// for (let i = 0; i < prices.length; i++) {
//     offerPrice[i] = prices[i]-prices[i]*0.1;
// }
// console.log(offerPrice);


//Array Methods //push,pop,toString,concat,unshift,shift
// let foodItems = ['potatos','apple','orange','litchi','tomato'];
// console.log(foodItems);

// foodItems.push("chips");
// console.log(foodItems);

// foodItems.pop();
// console.log(foodItems); 

// let deletedItems = foodItems.pop();
// console.log(deletedItems);
// console.log(foodItems);

// console.log(foodItems.toString());
// let numbers = [6743, 324, 4, 324, 2];
// console.log(numbers.toString());



// let marvelHeroes = ["iron_man","thor","spider_man","ant_man","captain_america"];
// let dcHeroes = ["bat_man","super_man","flash","wonder_woman","aqua_man"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

//unshift is similar to push// adds elements from starting
//shift is similar to pop //removes element from starting


// let dcHeroes = ["bat_man","super_man","flash","wonder_woman","aqua_man"];
// let val = dcHeroes.shift();
// console.log("deleted", val);
// console.log(dcHeroes);

// // console.log(dcHeroes.unshift(val));
// console.log(dcHeroes.unshift("bat_man"));
// console.log(dcHeroes);


//slice //dosn't changes original array
// let dcHeroes = ["bat_man","super_man","flash","wonder_woman","aqua_man"];
// console.log(dcHeroes);
// console.log(dcHeroes.slice(1.4));

// splice //changes original array values
// splice(startidx,delCount,newE1...)

// let arr = [1,2,3,4,5,6,7,8];
// arr.splice(2,2,101,102);
// console.log(arr);



//Qs create an array to store companies

// let arr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// arr.shift("Bloomberg");
// console.log(arr);
// arr.splice(1,1,"Ola");
// console.log(arr);
// arr.push("Amazon");
// console.log(arr);



 

