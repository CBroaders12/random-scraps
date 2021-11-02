let callback = (num) => {
  if (num % 2 == 0) {
    console.log('I am even');
  } else {
    console.log('I am odd');
  }
};

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(callback);
