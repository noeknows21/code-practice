var arr = ["apple", "banana",9,9,9, "pear"];
for (var i = 0; i < arr.length; i += 1) {
  if (arr[i] === 9) break;
}
console.log(i);

