function mkeid(i) {
  return Math.random().toString(36).substring(2, 2 + i);
}

const l = Number(prompt("Enter a number."));
console.log(mkeid(l));
