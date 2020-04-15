const difference = (first, second) => {
    const compSet = new Set(second);
    return first.filter(x => !compSet.has(x))
}


const result = difference([1,2,3,4,5,6], [5,6,7,8,9])

console.log(result)