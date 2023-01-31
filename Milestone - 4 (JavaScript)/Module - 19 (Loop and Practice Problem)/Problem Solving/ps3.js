var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');

//Find Index of banana.
console.log(bananaIndex);

//replace Banana with Mango.
fruits[1]= 'Mango';
console.log(fruits);

//remove Orange from the array
fruits.pop();
console.log(fruits);

//Add Watermelon to the array
fruits.push('Watermelon');
console.log(fruits);