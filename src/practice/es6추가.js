// Destructuring
let person = {name: 'James', age:25, job:'Programmer'};
const {name, age} = person;
console.log(name, age);

// 구조체 분할은 아님
person = {name, age, job:'Traveller'};    // {name:name, age:age, job:'Traveller'}; 의 형태를 생략
console.log(person);

let fruits = ['apple', 'banana', 'cherry'];
const [a, b, c] = fruits;
console.log(a, b, c);   // apple banana cherry
const [x,y] = fruits;
console.log(x, y);      // apple banana

// Rest Operator
const [l, ...m] = fruits;
console.log(l, m);      // aple [ 'banana', 'cherry' ]

// Spread Operator
let newFruits = [...fruits, 'melon'];
console.log(newFruits); // [ 'apple', 'banana', 'cherry', 'melon' ]
console.log([fruits, 'melon']); // [ [ 'apple', 'banana', 'cherry' ], 'melon' ] - array 안에 array 가 들어가 있는 모습

let str = 'Java';
console.log(...str);    // J a v a

let newPerson = {...person, gender:'male'};
console.log(newPerson);