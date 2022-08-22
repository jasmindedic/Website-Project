"use strict";

 // Function that changes text every few seconds for the text under the header
 const textChange = ["We dont do drama, we do basketball", "Heaven for every Basketball fan", "Enormous range of basketball stuff", "Best customer service"];
 
 let counter = 0;
 let text = document.querySelector(".text-pic");
 let inst = setInterval(change, 3000);

 function change() {
    text.innerHTML = textChange[counter];
    counter++;
    if (counter >= textChange.length){
        counter = 0;
        //clearInterval(inst);
    }
 }


// Function for shop button to direct to shopping page
const shoppingButton = document.querySelector(".shopping-btn");
shoppingButton.addEventListener("click", e => {
    window.location.href = "shop-page.html";
});
 
/*
// Get all add to cart buttons into varibles
let blazerBtn = document.getElementById("blazer");
let nike90Btn = document.getElementById("nike-90");
let airForceBtn = document.getElementById("air-force");
let jordan1Btn = document.getElementById("jordan-1");

// Ul element
let itemList = document.querySelector(".cart-list");

// Add listener to all add to cart buttons
blazerBtn.addEventListener("click", e =>{
    console.log(e);



    
    let liBlazer = document.createElement("li");

    let blazerPic = document.createElement("img")
    blazerPic = window.location.href = "./images.shoe1";
    liBlazer.appendChild(blazerPic);

    // Append the li element to the Ul element
    itemList.appendChild(liBlazer);
   
});


*/