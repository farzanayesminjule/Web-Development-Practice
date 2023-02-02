//if condition
const color = 'yellow';
if (color === 'green'){
    console.log('You are my green friend');
}
else if (color === 'blue'){
    console.log('You are my blue friend');
}
else if (color === 'red'){
    console.log('You are my red friend');
}
else if (color === 'white'){
    console.log('You are my white friend');
}
else {
    console.log('You are my black friend');
}

//switch condition
switch(color){
    case 'green':
        console.log('You are my green friend');
        break;
    case 'blue':
        console.log('You are my blue friend');
        break;
    case 'white':
        console.log('You are my white friend');
        break;
    case 'yellow':
        console.log('You are my yellow friend');
        break;
    case 'red':
        console.log('You are my red friend');
        break;
    default :
        console.log('You are my black friend');
}

