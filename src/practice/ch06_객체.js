const obj = {name:'james', age:25, job:'programmer'}
let age = 'age';
console.log(obj.name, obj[age], obj['job']);   // [] = key 값
for (let key in obj)
  console.log(obj[key]);
// 반복문 쓸 때 이와같이 쓴다 