
// if arrays element first index === m. split 

const bifurcateBy = (arr, fn) => arr.reduce((acc, val) => (acc[fn(val) ? 0 : 1].push(val), acc), [[],[]]);

const result = bifurcateBy(["jan", "may", "march","oct","arc", "sep"], x=> x[0] === 'm')
// [ [ 'may', 'march' ], [ 'jan', 'oct', 'arc', 'sep' ] ]

console.log(result)