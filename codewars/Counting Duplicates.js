
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
//  numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function countDuplicates(str) {
  const lowerStr = str.toLowerCase();
  const charCount = {};

  for (const char of lowerStr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let duplicates = 0;

  for (const char in charCount) {
    if (charCount[char] > 1) {
      duplicates++;
    }
  }

  return duplicates;
}

console.log(countDuplicates("aabbcde")); 
console.log(countDuplicates("abcccssddmlss"));
