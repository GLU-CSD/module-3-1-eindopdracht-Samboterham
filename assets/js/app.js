


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

let count = 0; // Startwaarde

// Selecteer alle knoppen met class "addToCart"
document.querySelectorAll(".addtocart").forEach(button => {
    button.addEventListener("click", function() {
        count++; // Verhoog teller
        document.getElementById("counter").textContent = count; // Update shoppingcart teller
    });
});



 

   