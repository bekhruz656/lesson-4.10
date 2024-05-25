function compareNumbers(num1, num2) {
    if (num1 > num2) {
        alert(num1 + " is greater than " + num2);
    } else if (num2 > num1) {
        alert(num2 + " is greater than " + num1);
    } else {
        alert("Both numbers are equal.");
    }
}

let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

compareNumbers(number1, number2);
