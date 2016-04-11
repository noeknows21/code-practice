
function addDoubles(a, b, add) {
  a *= 2;
  b *= 2;
  return add(a, b);
}
  
function add (a, b) {
  return a + b;
}
  
console.log(addDoubles(2, 3, add));

