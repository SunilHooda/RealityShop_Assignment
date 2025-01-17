// Section 1: Do this first (Don’t use outside help for this section)
// Write a function findFirstUniqueChar in JavaScript that takes a string as input and returns the
// index of the first non-repeating character. If there is no unique character, return -1.
// findFirstUniqueChar("keetnode"); // Output: 0 (The first unique character is 'k')
// findFirstUniqueChar("lovekeetnode"); // Output: 2 (The first unique character is 'v')
// findFirstUniqueChar("aabb"); // Output: -1 (There is no unique character)

const firstUniqueChar = (str) => {
  let obj = {};

  for (let char of str) {
    if (obj[char] === undefined) obj[char] = 0;
    obj[char]++;
  }

  //console.log(obj);

  for (let i = 0; i < str.length; ++i) {
    if (obj[str[i]] === 1) return i;
  }

  return -1;
};

//console.log(firstUniqueChar("keetnode"));

module.exports = firstUniqueChar;
