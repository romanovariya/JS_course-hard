'use strict';
const arr = ['78625', '23897272937', '1220183', '4983981', '20887', '20898', '123838'];

arr.forEach((item) => {
    if(item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});

for (let num = 2; num <= 100; num++) {

    let flag = true;
    for ( let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
        }
    }
    if (flag === true){
      console.log(num + ' Делители этого числа 1 и ' + num);
    }
}