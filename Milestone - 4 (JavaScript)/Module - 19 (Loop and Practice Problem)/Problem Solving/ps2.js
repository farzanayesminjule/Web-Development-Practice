//Write a program to calculate the average marks of mathematics, Biology, Chemistry, Physics and Bangla of a student.
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks ;
console.log(totalMarks);

var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed
(2);
console.log(averageTwoDecimal);