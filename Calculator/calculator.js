//let number1=document.getElementById('number1');
//let number2=document.getElementById('number2');
//let operation=document.getElementById('operation');
//let result = document.getElementById('result');

function addNumberButton() {
  if (document.getElementById('radio_number1').checked) {
    let number1_in_string = document.getElementById('number1').value;
    number1_in_string = '' + number1_in_string + this.innerHTML;
    document.getElementById('number1').value = number1_in_string;
  } else {
    let number2_in_string = document.getElementById('number2').value;
    number2_in_string = number2_in_string + this.innerHTML;
    document.getElementById('number2').value = number2_in_string;
  }
};

function equation() {
  let number1_in_string = parseFloat(document.getElementById('number1').value);
  let number2_in_string = parseFloat(document.getElementById('number2').value);
  if (document.getElementById('operation').value == "+") {
    document.getElementById('result').value = number1_in_string + number2_in_string;
  } else if (document.getElementById('operation').value == "-") {
    document.getElementById('result').value = number1_in_string - number2_in_string;
  } else if (document.getElementById('operation').value == "*") {
    document.getElementById('result').value = number1_in_string * number2_in_string;
  } else if (document.getElementById('operation').value == "/") {
    document.getElementById('result').value = number1_in_string / number2_in_string;
  }
  document.getElementById('radio_number1').checked = true;
  document.getElementById('radio_number2').checked = false;
}

function displayButton() {
  document.getElementById('operation').value = this.innerHTML;
  document.getElementById('radio_number1').checked = false;
  document.getElementById('radio_number2').checked = true;
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

document.getElementById('special').addEventListener("click", equation);

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
document.getElementById('button_.').addEventListener("click", addNumberButton);

