const myInches = 12;
const myFeet = myInches /12;
console.log(myFeet);

const dataInches = 144;
const dadaFeet = dataInches /12;
console.log('data feet', dadaFeet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const num1Inches = 144;
const num1Feet = inchToFeet(num1Inches);
console.log('Number one :',num1Feet);