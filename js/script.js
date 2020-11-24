'use strict';
const myFunc = function(arg) {
    let newArg;
    if (typeof(arg) !== 'string'){
        console.log('Введите строку');
    } else {
        newArg = arg.trim();
        if(newArg.length > 30) {
            newArg = newArg.substring(0, 30) + '...';
        }
    }
    return newArg;
};