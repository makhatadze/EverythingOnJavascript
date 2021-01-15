function anagrams(stringA, stringB){
  // create helper function to clean up string
  // use function per string and compare them
  return cleanString(stringA) === cleanString(stringB)
}
function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams('silent','listen'))