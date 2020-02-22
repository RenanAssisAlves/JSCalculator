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
var hasNumber = false;

eraseButton.onclick = function () {
    removeNumber();
}

restartButton.onclick = function () {
    screen.value = "0";
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
    if (hasNumber == false) {
        hasNumber = true;
        a = parseFloat(screen.value);
        operation = 0;
        screen.value = "0";
    }
    else if (hasNumber == true) {
        if (screen.value != 0)
        {
            b = parseFloat(screen.value);
            screen.value = doCalculation(a,b,operation);
            reset();
        }
        
    }
}

minusButton.onclick = function ()
{
    if (hasNumber == false)
    {
        a.parseFloat(screenValues)
    }
}

equalsButton.onclick = function () {
    if (hasNumber == true) {
        if (operation != null) {
           screen.value = doCalculation(a,b,operation);
           reset();

        }
    }
}

function reset()
{
    a = parseFloat(screen.value);
    b = 0;
    operation = null;
}

function doCalculation(a, b, operation)
{

    switch (operation) {
        case 0:
            return (a+b);
            break;
        case 1:
            return (a-b);
            break;
        case 2:
            return (a*b);
            break;
        case 3:
            return (a/b);
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