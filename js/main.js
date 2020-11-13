// application state variables
let total;

// cached element references
let input = document.getElementById("num");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const totalDisplay = document.querySelector("h1");

// event listeners
plusButton.addEventListener("click", increment);
minusButton.addEventListener("click", decrement);

// function executions
init();

// function declarations
function init() {
  total = 0;
  input.value = 1;
  render();
}

function render() {
  if (total < 0) {
    totalDisplay.style.color = "red";
  } else {
    totalDisplay.style.color = "black";
  }
  totalDisplay.innerText = total;
}

function increment() {
  total += parseInt(input.value);
  render();
}

function decrement() {
  total -= parseInt(input.value);
  render();
}