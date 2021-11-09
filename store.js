let a = 1;
let c = 1;

console.log(a === c);

let b = 'Chelsey';

console.log(b === 'Chelsey');

let conor = { name: 'Conor', age: 27 };
console.log(conor);

let otherConor = conor;

console.log(conor === otherConor);

let arr = [1, 2, 3, false, 'Conor', 'Chelsey', true, 567];
let storedArr = [...arr];

arr.splice(3, 3);

console.log(arr);
console.log(storedArr);

function add(x, y) {
  return x + y;
}

console.log(add(1, 3));

let coords = [1, 4];
console.log(add(...coords));
