const lang = prompt('ru or en'),
    weekRu = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятнца", "Суббота", "Воскресенье"],
    weekEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    weekArray = {
        ru: [weekRu],
        en: [weekEn],
    };
if (lang !== 'ru' && lang !== 'en') {
    alert('Произошла ошибка. Перезагрузите страницу');
}
if (lang === 'ru') {
    console.log(weekRu);
} else if (lang === 'en') {
    console.log(weekEn);
}
switch (lang) {
    case 'ru':
        console.log(weekRu);
        break;
    case 'en':
        console.log(weekEn);
        break;
}
console.log(weekArray[lang]);