var shoppingCart = {
    books : 3,
    sunglass: 1,
    keyboard : 5,
    mouse : 1
    }

const keys = Object.keys(shoppingCart);
console.log(keys);

const Values = Object.values(shoppingCart);
console.log(Values);

for(var i=0; i < keys.length; i++ ){
    console.log(keys[i]);
}

for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log('................');
    console.log(propertyName);
}