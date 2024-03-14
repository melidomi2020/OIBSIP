function addToInput(value) {
  document.getElementById("result").innerText += value;
}

function clearInput() {
  document.getElementById("result").innerText = "";
}

function calculate() {
  let input = document.getElementById("result").innerText;
  let result;
  try {
    result = eval(input);
  } catch (e) {
    result = "Error";
  }
  document.getElementById("result").innerText = result;
}
