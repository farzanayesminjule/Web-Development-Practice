var shoppingCart= {
books : 3,
sunglass: 1,
keyboard : 5,
mouse : 1
}

var penCount = shoppingCart['pen'];

var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);


console.log(properties);
console.log(propertiesValue);
console.log(shoppingCart);