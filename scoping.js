for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 200);
}

{
  let i = 0;
  setTimeout(() => console.log(i), 200);
}

{
  let i = 1;
  setTimeout(() => console.log(i), 200);
}

{
  let i = 2;
  setTimeout(() => console.log(i), 200);
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 200);
}

var i = 0;

{
  setTimeout(() => console.log(i), 200);
  i++;
}

{
  setTimeout(() => console.log(i), 200);
  i++;
}

{
  setTimeout(() => console.log(i), 200);
  i++;
}
