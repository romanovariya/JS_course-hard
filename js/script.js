'use strict';
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
const myFunc = function(arg) {
    let newArg;
    if (typeof(arg) !== 'string' || isNumber(arg) === true){
        console.log('Введите строку');
    } else {
        newArg = arg.trim();
        if(newArg.length > 30) {
            newArg = newArg.substring(0, 30) + '...';
        }
    }
    return newArg;
};