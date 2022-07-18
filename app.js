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


// Create function for shop button to direct to shopping page
const shoppingButton = document.querySelector(".shopping-btn");
shoppingButton.addEventListener("click", function(){
    window.location.href = "shop-page.html";
});
 