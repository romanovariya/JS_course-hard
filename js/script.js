let lang = 'ru';
let week;
let weekArray;
if (lang === 'ru') {
    week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятнца", "Суббота", "Воскресенье"];
} else if (lang === 'en') {
    week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
}
console.log(week);
switch (lang) {
    case 'ru':
        week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятнца", "Суббота", "Воскресенье"];
        break;
    case 'en':
        week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
}
console.log(week);
weekArray = {
    'ru': ["Понедельник", "Вторник", "Среда", "Четверг", "Пятнца", "Суббота", "Воскресенье"],
    'en': ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};
console.log(weekArray[lang]);