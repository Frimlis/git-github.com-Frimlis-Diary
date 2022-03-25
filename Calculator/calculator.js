//let number1=document.getElementById('number1');
//let number2=document.getElementById('number2');
//let operation=document.getElementById('operation');
//let result = document.getElementById('result');

function displayButton() {
  document.getElementById('operation').value = this.innerHTML;
}
function AC_reset() {
  document.getElementById('number1').value = "";
  number2=document.getElementById('number2').value = "";
  document.getElementById('operation').value = "";
  document.getElementById('result').value = "";
}
document.getElementById('button_+').addEventListener("click", displayButton);
document.getElementById('button_-').addEventListener("click", displayButton);
document.getElementById('button_*').addEventListener("click", displayButton);
document.getElementById('button_/').addEventListener("click", displayButton);

document.getElementById('reset').addEventListener("click", AC_reset);
