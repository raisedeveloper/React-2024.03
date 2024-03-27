let str = 'c:/Temp/ss/prpfile/james.jpg'
// 파일의 타입
let index = str.lastIndexOf('.');
console.log(str.substring(index+1));   // end를 생략하면 끝까지
// 파일이 있는 제일 마지막 디렉토리명
let arr = str.split('/');   // profile을 끄집어내고 싶을 때 : 우선 array로 만듦
console.log(arr[arr.length-2]);

const fruits = ['apple', 'banana', 'cherry'];
fruits.push('melon');
console.log(fruits.join(',')); 

const numbers = [4, 7, 10, 9, 15, 6];
console.log(numbers.sort((x,y) => x-y));    // 오름차순 정렬 - 자기파괴적 Method : 배열 자체가 변화됨
console.log(numbers);

fruits.forEach(value => {
  console.log(value);
});

fruits.forEach((value, index) => {
  console.log(value, index);
});

fruits.forEach((value, index, arr) => {   // arr 는 잘 사용안함
  console.log(value, index, arr);
});

let power = numbers.map(val => val * val);    // 제곱을 하기위해 value 만 필요
console.log(power);

let even = numbers.filter(val => val % 2 == 0);
console.log(even);
console.log(fruits.filter((val => val.length >= 6)));

let sum = numbers.reduce((prev, curr) => prev + curr, 0)   // 초기값 0
console.log(sum);   // 51, [4, 7, 10, 9, 15, 6] 의 합
console.log(numbers.reduce((prev, curr) => prev * curr, 1));

const complex = [
  {name:'pad', price:150000}, {name:'no-line mouse', price:80000}, {name:'electric pen', price:30000}
];
const jsonComplex = JSON.stringify(complex);    // 문자열로 만듦
console.log(jsonComplex);
const parseComplex = JSON.parse(jsonComplex)    // 문자열을 특별한 구조체로 만듦
console.log(parseComplex);