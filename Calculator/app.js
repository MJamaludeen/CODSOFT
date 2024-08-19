document.getElementById("btn").addEventListener("click", function () {
  let num1 = parseFloat(document.querySelector(".num1").value);
  let num2 = parseFloat(document.querySelector(".num2").value);
  let result = document.getElementById("resultValue");
  let operator = document.getElementById("selectOp").value;

  let calculation;

  switch (operator) {
    case "plus":
      calculation = num1 + num2;
      break;
    case "min":
      calculation = num1 - num2;
      break;
    case "multi":
      calculation = num1 * num2;
      break;
    case "dev":
      if (num2 === 0) {
        calculation = "Error: Division by zero";
      } else {
        calculation = num1 / num2;
      }
      break;
    default:
      calculation = "Invalid operation";
  }

  result.innerText = calculation;
});
