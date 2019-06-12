//variables
let input = document.getElementById('display');
let output = document.getElementById('output');
let expression = [];

// clear display and storage variables
function clearit () {
  input.innerHTML = '0';
  output.innerHTML = '';
  expression = [];
}

// display the number clicked
function num (n) {
  input.innerHTML === '0' ? input.innerHTML = n : input.innerHTML += n;
}

// when an operation is clicked
function operate (op) {
  if(expression[expression.length - 1] === '=') {
    expression = [];
  }
  // store number as string
  expression.push(input.innerHTML);
  // store operator as string
  expression.push(op);
  // the output display shows the number and the operation
  output.innerHTML = expression.join('');
  // reset the input display
  input.innerHTML = '0';
}

// do the calculation
function calculate () {
  // add last number to expression
  expression.push(input.innerHTML);
  // store the answer
  let answer = eval(expression.join('')); /* ALL THE MAGIC HAPPENS HERE */
  // change the input display to the answer
  input.innerHTML = answer;
  // add equals sign
  expression.push('=');
  // change output display to the stored expression
  output.innerHTML = expression.join('');
}
