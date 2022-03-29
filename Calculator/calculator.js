//let number1=document.getElementById('number1');
//let number2=document.getElementById('number2');
//let operation=document.getElementById('operation');
//let result = document.getElementById('result');
function addNumberButton() {
  if (document.getElementById('radio_number1').checked) {
    let number1_in_string = document.getElementById('number1').value + toString(this.innerHTML);
    document.getElementById('number1').value = number(number1_in_string);
  } else {
    let number2_in_string = document.getElementById('number2').value + toString(this.innerHTML);
    document.getElementById('number2').value = number(number2_in_string);
  }
};

function displayButton() {
  document.getElementById('operation').value = this.innerHTML;
};
function AC_reset() {
  document.getElementById('number1').value = "";
  number2=document.getElementById('number2').value = "";
  document.getElementById('operation').value = "";
  document.getElementById('result').value = "";
};
document.getElementById('button_+').addEventListener("click", displayButton);
document.getElementById('button_-').addEventListener("click", displayButton);
document.getElementById('button_*').addEventListener("click", displayButton);
document.getElementById('button_/').addEventListener("click", displayButton);

document.getElementById('reset').addEventListener("click", AC_reset);

document.getElementById('button_1').addEventListener("click", addNumberButton);
document.getElementById('button_2').addEventListener("click", addNumberButton);
document.getElementById('button_3').addEventListener("click", addNumberButton);
document.getElementById('button_4').addEventListener("click", addNumberButton);
document.getElementById('button_5').addEventListener("click", addNumberButton);
document.getElementById('button_6').addEventListener("click", addNumberButton);
document.getElementById('button_7').addEventListener("click", addNumberButton);
document.getElementById('button_8').addEventListener("click", addNumberButton);
document.getElementById('button_9').addEventListener("click", addNumberButton);
document.getElementById('button_0').addEventListener("click", addNumberButton);