'use strict';
    function dateClock() {
        const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 
    'сентрября', 'октября', 'ноября', 'декабря'];
 

    let date = new Date(),
        day = arr[date.getDay() - 1],
        dayNum = date.getDate(),
        month = monthArr[date.getMonth()],
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
    }
    function clock() { 
        let date = new Date(),
            day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
            month = (date.getMonth() < 10) ? '0' + date.getMonth() : date.getMonth(),
            year = date.getFullYear(),
            hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
            minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
            seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
            document.getElementById("siteClock").innerHTML = day + '.' + month + '.' + 
            year + ' - ' + hours + ':' + minutes + ':' + seconds;
    }
    setInterval(dateClock, 1000);
    setInterval(clock, 1000);
    dateClock();
    clock();
    