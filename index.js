





document.querySelector("button").addEventListener("click", calculate);
function calculate() {
  var a = document.getElementById("num1").valueAsNumber;
  var b = document.getElementById("num2").valueAsNumber;
  var result = a % b;
document.querySelector("output.box").innerHTML = result;
}
