const VOWELS = ['a','e','i','o','u']

const translatePigLatin = str => {
    const consonantCluster = str.split(/[aeiou]/)[0]

    return VOWELS.includes(str[0])
    ? `${str}way`
    : str.split('').every(c => !VOWELS.includes(c))
    ? `${str}ay`
    : `${str.substring(consonantCluster.length)}${consonantCluster}ay`
}

console.log(translatePigLatin("schwartz"))
console.log(translatePigLatin("eight"))

// tu pirveli asoa xmovani chaamatos boloshi way
// else, modzebnos sityvashi pirveli xmovani da gadaitanos boloshi shemdeg miamatos ay