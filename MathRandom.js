
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(1, 10));

//  more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random