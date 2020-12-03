'use strict';

    function dateClock() {
       
    let date = new Date(),
        daySmall = date.toLocaleString('ru', {weekday: 'long'}),
        dayNum = date.getDate(),
        newMonth = date.toLocaleString('ru', {month: 'long'}),
        month = newMonth.replace(newMonth[newMonth.length - 1], 'я'),
        day = daySmall.charAt(0).toUpperCase() + daySmall.slice(1),
        year = date.getFullYear(),
        hours = date.getHours(),
        hourWord,
        secWord,
        min = date.getMinutes(),
        sec = date.getSeconds();
    if (hours === 1 || hours === 21) {
        hourWord = 'час';
    } else if ((hours >= 2 && hours <= 4) || hours === 22 || hours === 23) {
        hourWord = 'часа';
    } else {
        hourWord = 'часов';
    }
    
    if (sec === 1 || sec === 21 || sec === 31 || sec === 41 || sec === 51) { 
        secWord = 'секунда';
    } else if ((sec >= 2 && sec <= 4) || (sec >= 22 && sec <= 24) || (sec >= 32 && sec <= 34) || (sec >= 42 && sec <= 44) || (sec >= 52 && sec <= 54)){
        secWord = 'секунды';
    } else {
        secWord = 'секунд';
    }
        document.getElementById("siteDate").innerHTML = 'Сегодня ' + day + ', ' + dayNum + 
        ' ' + month + ' ' + year + ' года, ' + hours + ' ' + hourWord  + ' ' + min + ' минут ' + sec + ' ' + secWord;
        document.getElementById("siteClock").innerHTML = date.toLocaleString('ru').replace(',', ' - ');
    }
    setInterval(dateClock, 1000);
    dateClock();
    
    