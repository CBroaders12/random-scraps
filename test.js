const str = '12544';

let arr = [];

for (let i = 0; i < str.length - 1; i++) {
  arr.push(str.slice(i, i + 2));
}

console.log(arr);
// ["12", "25", "54", "44"]

const _Alpha = 'abcdefghijklmnopqrstuvwxyz';
const _Cipher = 'cowabdefghijklmnpqrstuvxyz';

function encipher(message) {
  // message = message.toLowercase();
  let ciphered = '';
  for (let letter of message) {
    if (letter === ' ') {
      ciphered += ' ';
    } else {
      let index = _Alpha.indexOf(letter.toLowerCase());
      ciphered += _Cipher[index];
    }
  }

  return ciphered;
}

console.log(encipher('conor')); //wmlmq

console.log(encipher('I am a CODER'));
