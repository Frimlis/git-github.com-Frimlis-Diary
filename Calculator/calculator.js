//let number1=document.getElementById(number1);
//let number2=document.getElementById(number2);
//let operation=document.getElementById(operation);
//let result = document.getElementById(result);

function displayButton() {
  document.getElementById('operation').value = this.innerHTML;
}
document.getElementById('button_+').addEventListener("click", displayButton);
document.getElementById('button_-').addEventListener("click", displayButton);
document.getElementById('button_*').addEventListener("click", displayButton);
document.getElementById('button_/').addEventListener("click", displayButton);
