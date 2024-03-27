const fs = require('fs');
// 1) 동기식으로 읽기 - 권장 X
// const file01 = fs.readFileSync('./01.전역변수.js');    // 전역변수 읽음
// console.log(file01.toString());
// console.log('========================================');
// const file02 = fs.readFileSync('./02.osModule.js');
// console.log(file02.toString());
// console.log('========================================');


// 1) 비동기식으로 읽기 - 권장 X
fs.readFile('./01.전역변수.js',(err, data) => {
  console.log(data.toString());
});

console.log('========================================');
fs.readFile('./02.osModule.js',(err, data) => {
  console.log(data.toString());
});
console.log('========================================');

// 3) 올바른 비동기식 읽기 - 권장
fs.readFile('./01.전역변수.js',(err, data) => {
  console.log(data.toString());
  console.log('======================================');
  fs.readFile('./02.osModule.js',(err, data) => {
    console.log(data.toString());
    console.log('======================================');
  });
});