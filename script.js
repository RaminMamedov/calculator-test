// let buttonPlus = document.getElementById("button-plus");
// let buttonMinus = document.getElementById("button-minus");
// let buttonMultiply = document.getElementById("button-multiply");
// let buttonDevide = document.getElementById("button-devide");

// function onButtonPlusClick() {
//   let input1 = document.getElementById("number1");
//   let input2 = document.getElementById("number2");

//   let number1 = Number(input1.value);
//   let number2 = Number(input2.value);

//   let result = number1 + number2;
//   alert(result);
// }

// function onButtonMinusClick() {
//   let input1 = document.getElementById("number1");
//   let input2 = document.getElementById("number2");

//   let number1 = Number(input1.value);
//   let number2 = Number(input2.value);

//   let result = number1 - number2;
//   alert(result);
// }

// function onButtonMultiplyClick() {
//   let input1 = document.getElementById("number1");
//   let input2 = document.getElementById("number2");

//   let number1 = Number(input1.value);
//   let number2 = Number(input2.value);

//   let result = number1 * number2;
//   alert(result);
// }

// function onButtonDevideClick() {
//   let input1 = document.getElementById("number1");
//   let input2 = document.getElementById("number2");

//   let number1 = Number(input1.value);
//   let number2 = Number(input2.value);

//   let result = number1 / number2;
//   alert(result);
// }

// buttonPlus.addEventListener("click", onButtonPlusClick);
// buttonMinus.addEventListener("click", onButtonMinusClick);
// buttonMultiply.addEventListener("click", onButtonMultiplyClick);
// buttonDevide.addEventListener("click", onButtonDevideClick);

/******************Второй способ создания калькулятора******************************************/

// Создаем переменные, которые хранят содержимое 4 кнопок (+, -, *, /)
let buttonPlus = document.getElementById("button-plus");
let buttonMinus = document.getElementById("button-minus");
let buttonMultiply = document.getElementById("button-multiply");
let buttonDevide = document.getElementById("button-devide");


// Создаем две переменные, которые хранят введенные в строки ввода значения
let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");


// Создаем функции, которые каждый раз выдают нам введенные значения в эти строки ввода
function getNumber1() {
  return Number(input1.value);
}

function getNumber2() {
  return Number(input2.value);
}


// Создаем функцию, которая произведет математическую операцию с полученными значениями
function makeOperation(operationCode) {
  if (operationCode === "+") {
    var result = getNumber1() + getNumber2();
  } else if (operationCode === "-") {
    var result = getNumber1() - getNumber2();
  } else if (operationCode === "*") {
    var result = getNumber1() * getNumber2();
  } else if (operationCode === "/") {
    var result = getNumber1() / getNumber2();
  } else {
    alert("operation is unknow")
  }
  alert(result);
}


// Создаем функцию, которая поймет на какую кнопку нажал пользователь (+, -, *, /), результат уйдет в параметр выше
function onOperationButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let operation = clickedElement.innerHTML;
  makeOperation(operation);
}


// Создаем фукнцию Листенер, которую просим при клике на кнопки вызвать функцию onOperationButtonClick
buttonPlus.addEventListener("click", onOperationButtonClick);
buttonMinus.addEventListener("click", onOperationButtonClick);
buttonMultiply.addEventListener("click", onOperationButtonClick);
buttonDevide.addEventListener("click", onOperationButtonClick);

