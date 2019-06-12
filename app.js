// constants
const operators = ["+", "-", "*", "/"];

// variables
let input = document.getElementById("display");
let output = document.getElementById("output");
let expression = [];

// clear display and storage variables
function clearit() {
  input.innerHTML = "0";
  output.innerHTML = "";
  expression = [];
}

// display the number clicked
function num(n) {
  // if just calc'd
  if (expression[expression.length - 1] === "=") {
    clearit();
  }

  // if the input number already includes a decimal skip this one
  if (n === "." && input.innerHTML.split("").includes(".")) {
    return;
  }

  if (operators.includes(input.innerHTML)) {
    input.innerHTML = "";
  }

  // add the input key
  input.innerHTML === "0" ? (input.innerHTML = n) : (input.innerHTML += n);
  output.innerHTML = expression.join("") + input.innerHTML;
}

// when an operator is clicked
function operate(op) {
  // if just calc'd
  if (expression[expression.length - 1] === "=") {
    expression = [];
  }

  // display operator change
  if (operators.includes(input.innerHTML)) {
    input.innerHTML = op;
  }

  if (!operators.includes(input.innerHTML)) {
    // add the number
    expression.push(input.innerHTML);
  }

  // if the last item in the expression is an operator
  if (operators.includes(expression[expression.length - 1])) {
    // replace that operator with the new one
    expression[expression.length - 1] = op;
    output.innerHTML = expression.join("");
    return;
  }

  // add the operation
  expression.push(op);
  // show the expression
  output.innerHTML = expression.join("");
  // show operator at input
  input.innerHTML = op;
}

// do the calculation
function calculate() {
  // add last number to expression
  expression.push(input.innerHTML);
  // store the answer
  let answer = eval(expression.join("")); /* ALL THE MAGIC HAPPENS HERE */
  // change the input display to the answer
  input.innerHTML = answer;
  // add equals sign
  expression.push("=");
  // change output display to the stored expression
  output.innerHTML = expression.join("");
}
