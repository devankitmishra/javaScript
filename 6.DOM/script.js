// console.log(document.body.childNodes[1]);

// document.getElementsByClassName("heading");

// let heading = document.getElementsByClassName("myClass");
// console.log(heading);

// let button = document.getElementById("myId");
// console.log(button);

// let parahs = document.getElementsByTagName("p");
// console.log(parahs);

// let firstElement = document.querySelector("p");
// let allElement =document.querySelectorAll("p");
// console.log(firstElement);
// console.log(allElement);
// console.log(firstElement.tagName);


// console.dir(document.body.firstChild);
// document.querySelector("div").children;//try in cosole log

/* Create a H2 heading element with text-"Hello 
JavaScript". Append "from Apna College students"
 to this text using JS.*/

//  let h2 = document.querySelector("h2");
//  console.dir(h2.innerText);
//  h2.innerText = h2.innerText + "from Apna College students";
//  console.log(h2.innerText);


/*Create 3 divs with common class name - "box" . 
Access them and add some unique text to each of them.*/

// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);

// let idx = 1;

// for (div of divs) {
//     console.log(div.innerText);
// }

// for (div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }


// DOM PART 2

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newcls"));//class name can be change dynamically

// let div = document.querySelector("div");
// div.style.backgroundColor = "yellow";
// div.style.fontSize = "76px";
// div.innerText = "Hello ";
// div.style.visibility = "hidden";

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.after(newBtn);
// div.before(newBtn);
// div.remove();

// let newHead  = document.createElement("h1");
// newHead.innerHTML = "<i>hi its a sample heading</i>";
// document.querySelector("body").prepend(newHead);

//Read from MDN Documentation whats appendChild(), removeChild();

//Q1 Create a new button element. Give it a text "Click me", 
// backgroud color of red and text color of white.

// let newButton = document.createElement("button");
// newButton.innerText = "Click me";
// document.querySelector("body").prepend(newButton);
// newButton.style.backgroundColor = "red";
// newButton.style.color = "white";
// newButton.style.padding = "20px";
// newButton.style.margin = "100px";
// newButton.style.borderRadius = "5px";


//Q1 Create a <p> tag in hrml, give it a class& some styling.
// Now create a new class in css and try to append this class
// to the <p> element
// Did you notice, how you overwrite the class name when you
// add a new one ? Solve this using classList

// let para = document.querySelector("p");
// // para.getAttribute("class");
// // para.setAttribute("class","newClass");// it will remove the previous class name
// para.classList.add("newClass");// it will append anouther class and won't remove the previous class









