// Stap 1 Nummbers targeten door middel van een onclick function
// met een parameter toe te passen.
function forclear() {
  let outputField = document.getElementById("output").innerHTML;
  document.getElementById("output").innerHTML = "0";
  document.getElementById("clear").innerText = "AC";
}
function removeZero() {
  let value = document.getElementById("output").innerHTML;
  if (value == "0") {
    value = " ";
    document.getElementById("output").innerHTML = value;
  }
}

function number(val) {
  document.getElementById("output").innerHTML += val;
  let outputField = document.getElementById("output").innerHTML;
  
  
}

// Stap 2.weergeven op output field

function fordisplay(myvalue) {
  removeZero();
  if (myvalue === '.' && document.getElementById("output").innerHTML.includes('.')) return
  document.getElementById("clear").innerText = "C";
  document.getElementById("output").innerHTML += myvalue;

  
}

function negative() {
  let value = document.getElementById("output").innerHTML;
  // return -Math.abs(value);
  document.getElementById("output").innerHTML = -Math.abs(value);
  if (value == -Math.abs(value)) {
    document.getElementById("output").innerHTML = Math.abs(value);
  }
}

function solve() {
  let equation = document.getElementById("output").innerHTML;
  let solved = eval(equation);
  document.getElementById("output").innerHTML = solved;
}
