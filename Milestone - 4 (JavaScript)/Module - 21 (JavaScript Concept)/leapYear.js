function isLeapYear(){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('This year is leap year -',year );
    }
    else{
        console.log('This year is not leap year -',year );
    }
}