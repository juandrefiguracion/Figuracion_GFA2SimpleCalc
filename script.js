document.getElementById("sum").addEventListener("click", function() {
      calculate("sum");
    });
    
document.getElementById("difference").addEventListener("click", function() {
      calculate("difference");
    });
    
document.getElementById("product").addEventListener("click", function() {
      calculate("product");
    });
  
document.getElementById("quotient").addEventListener("click", function() {
      calculate("quotient");
    });
    
document.getElementById("modulo").addEventListener("click", function() {
      calculate("modulo");
    });
    
    // Define the calculate function
function calculate(operation) {
  event.preventDefault();
      // Get the input values
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      
      // Calculate the result based on the selected operation
      var result;
      switch(operation) {
        case "sum":
          result = num1 + num2;
          break;
        case "difference":
          result = num1 - num2;
          break;
        case "product":
          result = num1 * num2;
          break;
        case "quotient":
          result = num1 / num2;
          break;
        case "modulo":
          result = num1 % num2;
          break;
      }
      
      // Display the result on the page
document.getElementById("result").innerHTML = "The " + operation + " of " + num1 + " and " + num2 + " is " + result + ".";
}