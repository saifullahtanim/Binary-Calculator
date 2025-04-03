function addToDisplay(val) {
    const display = document.getElementById("display");
    display.value += val;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("toDecimal").innerHTML = "";
  }
  
  function calculate() {
    const display = document.getElementById("display");
    const input = display.value;
  
    let result = "";
    let decimalNumber = "";
  
    const match = input.match(/^([01]+)([+\-*/])([01]+)$/);
    if (!match) {
      display.value = "Error";
      document.getElementById("toDecimal").innerHTML = "Invalid Input";
      return;
    }
  
    const binary1 = match[1];
    const operator = match[2];
    const binary2 = match[3];
  
    const num1 = parseInt(binary1, 2);
    const num2 = parseInt(binary2, 2);
  
    switch (operator) {
      case "+":
        result = (num1 + num2).toString(2);
        decimalNumber = num1 + num2;
        break;
      case "-":
        result = (num1 - num2).toString(2);
        decimalNumber = num1 - num2;
        break;
      case "*":
        result = (num1 * num2).toString(2);
        decimalNumber = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          result = "Error";
          decimalNumber = "Division by zero";
        } else {
          result = Math.floor(num1 / num2).toString(2);
          decimalNumber = Math.floor(num1 / num2);
        }
        break;
      default:
        result = "Error";
        decimalNumber = "Invalid operation";
    }
  
    display.value = result;
    document.getElementById("toDecimal").innerHTML = decimalNumber;
  
    const fullExpression = `${binary1}${operator}${binary2} = ${result}`;
    localStorage.setItem("previousCalculation", fullExpression);
    document.getElementById("previousCalculation").innerHTML =
      "Previous: " + fullExpression;
  }
  
  // Load previous calculation if available
  window.onload = () => {
    const prev = localStorage.getItem("previousCalculation");
    if (prev) {
      document.getElementById("previousCalculation").innerHTML =
        "Previous: " + prev;
    }
  };
  