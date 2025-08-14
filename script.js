let btn1 = document.querySelector("#dikshit");
let btn2 = document.querySelector("#ishan");
let btn3 = document.querySelector("#saksham");


btn1.addEventListener("click", () => {
    let body = document.querySelector("body");
    
    if(body.style.backgroundColor === "red"){
        body.style.backgroundColor = "white";
        
    } else {
        body.style.backgroundColor = "red";
        console.log("dark");
    }
});

btn2.addEventListener("click", () => {
    let body = document.querySelector("body");
    
    if(body.style.backgroundColor === "blue"){
        body.style.backgroundColor = "white";
        
    } else {
        body.style.backgroundColor = "blue";
        console.log("dark");
    }
});

btn3.addEventListener("click", () => {
    let body = document.querySelector("body");
    
    if(body.style.backgroundColor === "green"){
        body.style.backgroundColor = "white";
        
    } else {
        body.style.backgroundColor = "green";
        console.log("dark");
    }
});