// script.js for hw9 comp 484

// part 1 date display

// create the current date
const currentDate = new Date();

// get the month day and year
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

// add a zero before single digit months
if (currentMonth < 10) {
  currentMonth = "0" + currentMonth;
}

// add a zero before single digit days
if (currentDay < 10) {
  currentDay = "0" + currentDay;
}

// create the date message
const dateMessage =
  "Today is " + currentMonth + "/" + currentDay + "/" + currentYear;

// display the date
document.getElementById("dateOutput").textContent = dateMessage;

// part 2 number conversion

// starting values
const originalValueOne = "43";
const originalValueTwo = "20.25";
const originalValueThree = "goodbye";
const originalValueFour = "101";

// convert the values
const convertedValueOne = Number(originalValueOne);
const convertedValueTwo = Number(originalValueTwo);
const convertedValueThree = Number(originalValueThree);
const convertedValueFour = Number(originalValueFour);

// check for nan
const valueOneIsNaN = Number.isNaN(convertedValueOne);
const valueTwoIsNaN = Number.isNaN(convertedValueTwo);
const valueThreeIsNaN = Number.isNaN(convertedValueThree);
const valueFourIsNaN = Number.isNaN(convertedValueFour);

// check for integers
const valueOneIsInteger = Number.isInteger(convertedValueOne);
const valueTwoIsInteger = Number.isInteger(convertedValueTwo);
const valueThreeIsInteger = Number.isInteger(convertedValueThree);
const valueFourIsInteger = Number.isInteger(convertedValueFour);

// build the results manually using string concatenation and html tags
// first result
const resultOne =
  "<div class='test-row'>" +
  '<div>"' +
  originalValueOne +
  '"</div>' +
  "<div>" +
  convertedValueOne +
  "</div>" +
  "<div>" +
  valueOneIsNaN +
  "</div>" +
  "<div>" +
  valueOneIsInteger +
  "</div>" +
  "</div>";

// second result
const resultTwo =
  "<div class='test-row'>" +
  '<div>"' +
  originalValueTwo +
  '"</div>' +
  "<div>" +
  convertedValueTwo +
  "</div>" +
  "<div>" +
  valueTwoIsNaN +
  "</div>" +
  "<div>" +
  valueTwoIsInteger +
  "</div>" +
  "</div>";

// third result
const resultThree =
  "<div class='test-row'>" +
  '<div>"' +
  originalValueThree +
  '"</div>' +
  "<div>" +
  convertedValueThree +
  "</div>" +
  "<div>" +
  valueThreeIsNaN +
  "</div>" +
  "<div>" +
  valueThreeIsInteger +
  "</div>" +
  "</div>";

// fourth result
const resultFour =
  "<div class='test-row'>" +
  '<div>"' +
  originalValueFour +
  '"</div>' +
  "<div>" +
  convertedValueFour +
  "</div>" +
  "<div>" +
  valueFourIsNaN +
  "</div>" +
  "<div>" +
  valueFourIsInteger +
  "</div>" +
  "</div>";

// display the number results
document.getElementById("numberConversionOutput").innerHTML =
  resultOne + resultTwo + resultThree + resultFour;

// part 3 math and formatting

// price values
const itemPrice = 24.99;
const quantity = 3;
const shippingCost = 7.5;
const taxRate = 0.08;

// calculate subtotal
const subtotal = itemPrice * quantity;

// calculate tax
const taxAmount = subtotal * taxRate;

// calculate total
const totalCost = subtotal + taxAmount + shippingCost;

// format numbers
const formattedItemPrice = itemPrice.toFixed(2);
const formattedSubtotal = subtotal.toFixed(2);
const formattedTaxAmount = taxAmount.toFixed(2);
const formattedShipping = shippingCost.toFixed(2);
const formattedTotal = totalCost.toFixed(2);

// build math results manually using string concatenation and html tags
const mathResults =
  "<p class='math-result'>Item Price: $" +
  formattedItemPrice +
  "</p>" +
  "<p class='math-result'>Quantity: " +
  quantity +
  "</p>" +
  "<p class='math-result'>Subtotal: $" +
  formattedSubtotal +
  "</p>" +
  "<p class='math-result'>Tax: $" +
  formattedTaxAmount +
  "</p>" +
  "<p class='math-result'>Shipping: $" +
  formattedShipping +
  "</p>" +
  "<p class='math-result'><strong>Total Cost: $" +
  formattedTotal +
  "</strong></p>";

// display math results
document.getElementById("mathOutput").innerHTML = mathResults;

// part 4 required if else conditional messages

// check the first value
if (Number.isNaN(convertedValueOne)) {
  document.getElementById("validationOne").textContent =
    '"' + originalValueOne + '" is not a valid number.';
} else if (Number.isInteger(convertedValueOne)) {
  document.getElementById("validationOne").textContent =
    '"' + originalValueOne + '" is a valid integer.';
} else {
  document.getElementById("validationOne").textContent =
    '"' + originalValueOne + '" is a valid decimal number.';
}

// check the second value
if (Number.isNaN(convertedValueTwo)) {
  document.getElementById("validationTwo").textContent =
    '"' + originalValueTwo + '" is not a valid number.';
} else if (Number.isInteger(convertedValueTwo)) {
  document.getElementById("validationTwo").textContent =
    '"' + originalValueTwo + '" is a valid integer.';
} else {
  document.getElementById("validationTwo").textContent =
    '"' + originalValueTwo + '" is a valid decimal number.';
}

// check the third value
if (Number.isNaN(convertedValueThree)) {
  document.getElementById("validationThree").textContent =
    '"' + originalValueThree + '" is not a valid number.';
} else if (Number.isInteger(convertedValueThree)) {
  document.getElementById("validationThree").textContent =
    '"' + originalValueThree + '" is a valid integer.';
} else {
  document.getElementById("validationThree").textContent =
    '"' + originalValueThree + '" is a valid decimal number.';
}

// check the fourth value
if (Number.isNaN(convertedValueFour)) {
  document.getElementById("validationFour").textContent =
    '"' + originalValueFour + '" is not a valid number.';
} else if (Number.isInteger(convertedValueFour)) {
  document.getElementById("validationFour").textContent =
    '"' + originalValueFour + '" is a valid integer.';
} else {
  document.getElementById("validationFour").textContent =
    '"' + originalValueFour + '" is a valid decimal number.';
}
