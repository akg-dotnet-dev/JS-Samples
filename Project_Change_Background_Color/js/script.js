var body = document.querySelector("body");
            
var colorArray = ["Red", "Pink", "Blue", "Yellow", "Green", "Brown","Orange","Indigo","White","Red"];

var btn = document.getElementById("clkme");

btn.addEventListener("click", function() {
  
    let randomNum = Math.floor((Math.random() * 10) + 1);
    console.log(randomNum);
    body.style.background= colorArray[randomNum];
})