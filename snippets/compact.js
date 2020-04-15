const compact = arr => arr.filter(x => Boolean(x));

const result = compact([0, 1, false, 2, '', 3, 'a', NaN, 'e'])

// [ 1, 2, 3, 'a', 'e' ]
console.log(result)