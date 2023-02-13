// 1 * 2 * 3 * 4................

function multiOfNumber(number){
    let result = 1;
    for(let i=1; i < number; i++){
        result = result * i;

    }
    return result;
}

const result = multiOfNumber(7);
console.log(result);