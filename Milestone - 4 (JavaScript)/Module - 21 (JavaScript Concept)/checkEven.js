function checkEven(number){
    const remainder = number % 2;
   // console.log(remainder);
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumber = checkEven(303);
console.log(myNumber);
const herNumber = checkEven(300);
console.log(herNumber);


