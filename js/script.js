const num = 266219;

let strNum,
    slice1,
    slice2,
    slice3,
    slice4,
    slice5,
    slice6,
    cube,
    partOfCube;

strNum = num.toString();
slice1 = strNum.slice(0, 1);
slice2 = strNum.slice(1, 2);
slice3 = strNum.slice(2, 3);
slice4 = strNum.slice(3, 4);
slice5 = strNum.slice(4, 5);
slice6 = strNum.slice(5, 6);
cube = +slice1 * +slice2 * +slice3 * +slice4 * +slice5 * +slice6;

console.log(cube);

cube = cube ** 3;

partOfCube = String(cube).slice(0, 2);
console.log(partOfCube);