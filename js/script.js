'use strict';
const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
 
for (let i = 0; i < arr.length; i++) {

    let date = new Date();

    if (arr[i] === 'Суббота' || arr[i] === 'Воскресенье')
    {
        document.write(arr[i].italics() + '<br \/>');
    }
    else if (i === date.getDay() - 1)
    {
        document.write(arr[i].bold() + '<br \/>');
    }
    else
    {
        document.write(arr[i] + '<br \/>');
    }
}