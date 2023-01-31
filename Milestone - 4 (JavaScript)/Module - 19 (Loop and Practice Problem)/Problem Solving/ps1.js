//Harry's mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.

var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var totalPrice = applePrice + orangePrice;
console.log(totalPrice);

var giveBack = moneyGiven - totalPrice;
console.log(giveBack);