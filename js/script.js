const num = 266219;

let strNum,
    res = 1,
    len,
    cube,
    i = 0,
    partOfCube;

strNum = num.toString();
len  = strNum.length;
while (i < len){
    res *= +strNum[i];
    i++;
}
console.log(res);
cube = res ** 3;

partOfCube = String(cube).slice(0, 2);
console.log(partOfCube);