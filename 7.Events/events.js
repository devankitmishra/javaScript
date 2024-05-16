// let btn = document.querySelector("#btn");
// // btn.onclick = () => {
// //     console.log("btn was clicked");
// //     let a = 25;
// //     a++;
// //     console.log(a);
// // };

// btn.addEventListener("click", () => {
//     console.log("button was clicked by 1st handler");
// });

// btn.addEventListener("click", () => {
//     console.log("button was clicked by 2nd handler");
// });

// const handler3 = () => {
//     console.log("button was clicked by 3rd handler");
// };

// btn.addEventListener("click", handler3);

// btn.addEventListener("click", () => {
//     console.log("button was clicked by 4th handler");
// });

// // let div = document.querySelector("div");
// // div.onmouseover = () => {
// //     console.log("Your are inside the box");
// // };

// // btn.onclick = (event) => {
// //     console.log(event);
// //     console.log(event.type);
// //     console.log(event.target);
// //     console.log(event.clientX, event.clientY);
// // };
// //so if we want to remove handler3 thne we have to store the handler in a variable
// btn.removeEventListener("click", handler3);

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
    console.log("mode changed");
    if (currMode === "light") {
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currMode);
});