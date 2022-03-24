//let number1=document.getElementById('number1');
//let number2=document.getElementById('number2');
//let operation=document.getElementById('operation');
//let result = document.getElementById('result');

function displayButton() {
  document.getElementById('operation').value = this.innerHTML;
}
function AC_reset() {
  //number1.reset();
  //number2.reset();
  document.getElementById('operation').value = "";
 // result.reset();
}
document.getElementById('button_+').addEventListener("click", displayButton);
document.getElementById('button_-').addEventListener("click", displayButton);
document.getElementById('button_*').addEventListener("click", displayButton);
document.getElementById('button_/').addEventListener("click", displayButton);

document.getElementById('reset').addEventListener("click", AC_reset);
