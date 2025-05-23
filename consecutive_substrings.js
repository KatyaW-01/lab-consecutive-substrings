function consecutiveSubstrings(string) {
  // type your code here
  const array = string.trim().split("")
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


//Given a string, return all consecutive substrings within that string consisting of at least one character. Substrings should be returned in the order in which they appear.
