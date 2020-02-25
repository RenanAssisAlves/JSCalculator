var screen = document.getElementById("screen");
var eraseButton = document.getElementById("eraseButton");
var restartButton = document.getElementById("restartButton");
var oneButton = document.getElementById("oneButton");
var twoButton = document.getElementById("twoButton");
var threeButton = document.getElementById("threeButton");
var fourButton = document.getElementById("fourButton");
var fiveButton = document.getElementById("fiveButton");
var sixButton = document.getElementById("sixButton");
var sevenButton = document.getElementById("sevenButton");
var eightButton = document.getElementById("eightButton");
var nineButton = document.getElementById("nineButton");
var zeroButton = document.getElementById("zeroButton");
var divideButton = document.getElementById("divideButton");
var multiplyButton = document.getElementById("multiplyButton");
var minusButton = document.getElementById("minusButton");
var plusButton = document.getElementById("plusButton");
var equalsButton = document.getElementById("equalsButton");

var a = Float32Array;
var b = Float32Array;
var storedNumber = Float32Array;
var operation = Number;
var operationLast = Number;
var hasNumber = false;
var didOperation = false;

a=null;
b=null;
storedNumber=null;

eraseButton.onclick = function () {
    removeNumber();
}

restartButton.onclick = function () {
    screen.value = "0";
    a = null;
    b = null;
    operation = null;
    operationLast = null;
    storedNumber = null;
    hasNumber = false;
    didOperation = false;
}

zeroButton.onclick = function () {
    addNumber(0);
}

oneButton.onclick = function () {
    addNumber(1);
}
twoButton.onclick = function () {
    addNumber(2);
}
threeButton.onclick = function () {
    addNumber(3);
}

fourButton.onclick = function () {
    addNumber(4);
}

fiveButton.onclick = function () {
    addNumber(5);
}

sixButton.onclick = function () {
    addNumber(6);
}
sevenButton.onclick = function () {
    addNumber(7);
}
eightButton.onclick = function () {
    addNumber(8);
}
nineButton.onclick = function () {
    addNumber(9);
}

plusButton.onclick = function () {
    if (operationLast != 0)
    {
        b = null;
    }
    operationLast = 0;
    operationButton(0);
}

minusButton.onclick = function () {
    if (operationLast != 1)
    {
        b = null;
    }
    operationLast = 1;
    operationButton(1);
}

multiplyButton.onclick = function()
{
    if (operationLast != 2)
    {
        b = 1;
    }
    operationLast = 2;
    operationButton(2);
}

divideButton.onclick = function()
{
    if (operationLast != 3)
    {
        b = 1;
    }
    operationLast = 3;
    operationButton(3);
}

equalsButton.onclick = function () {
    operationButton(operationLast);
}

operationButton = function (operationNumber) {
    operation = operationNumber;
    if (!hasNumber && storedNumber == null && a == null && b == null) {
        a = parseFloat(screen.value);
        hasNumber = true;
        screen.value = "0";
    }
    else if (hasNumber && b == null && storedNumber == null)
    {
        b = parseFloat(screen.value);
        storedNumber = doCalculation(a,b,operation);
        screen.value=storedNumber;
        hasNumber = false;
        operation = null;
    }
    else if (storedNumber != null && parseFloat(screen.value) != storedNumber) {
      b = parseFloat(screen.value);
      storedNumber = doCalculation(storedNumber,b,operation);
      screen.value=storedNumber;
      operation=null;
    }
    else if (storedNumber != null && parseFloat(screen.value) == storedNumber) {
        storedNumber = doCalculation(storedNumber,b,operation);
      screen.value=storedNumber;
      operation=null;
        
    }
    didOperation = true;
}

function doCalculation(a, b, operation) {

    switch (operation) {
        case 0:
            return (a + b);
            break;
        case 1:
            return (a - b);
            break;
        case 2:
            return (a * b);
            break;
        case 3:
            if (b!=0)
            {
                return (a / b);
            }
            else
            {
                screen.value="Error";
            }
        default:
            console.log("Unknown operation")
            return;
            break;
    }
}

function addNumber(n) {
    if (screen.value == "0") {
        screen.value = "";
    }

    if (didOperation == true)
    {
        didOperation = false;
        screen.value = "";
    }

    screen.value += n;
}

function removeNumber() {
    var screenValues = screen.value;
    var values = "";
    for (let i = 0; i < screenValues.length - 1; i++) {
        values += screen.value[i];
    }
    screen.value = values;
    if (screen.value == "") {
        screen.value = "0";
    }

}