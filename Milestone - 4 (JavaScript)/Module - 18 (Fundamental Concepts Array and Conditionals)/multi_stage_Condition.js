var money = 100;
var danishPrice = 45;
var butterBread = 35;
var toastedBiscuit = 20;


if(danishPrice < money){
    console.log('Give me the Danish');
}
else if(butterBread < money){
    console.log('Give me the ButterBread');
}
else if(toastedBiscuit < money){
    console.log('Give me the ToastedBiscuit');
}
else{
    console.log('Give me the tea only');
}