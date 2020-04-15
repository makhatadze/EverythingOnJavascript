const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')

const result = capitalize('fooBar')

// first letter uppercase
console.log(result)
