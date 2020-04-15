
// return true or false by condition x > 1 

const all = ( arr, fn = Boolean) => arr.every(fn);

const result = all([4, 5,6], x=> x > 1)

// true
console.log(result)