let expression = "";

function buttonPressed(val) {
  expression += val;
  document.getElementById("display").value = expression;
}

function calculate() {
  let result = eval(expression);
  document.getElementById("display").value = result;
  expression = "";
}

function buttonClicked(buttonValue) {
  const display = document.getElementById("display");
  if (buttonValue === "C") {
    display.value = "";
    expression = "";
  } else if (buttonValue === "=") {
    calculate();
  } else {
    display.value += buttonValue;
  }
}
function clearCalculator() {
  const display = document.getElementById("display");
  display.value = "";
  expression = "";
}

