function destroyer(arr) {
    return arr.filter(el => ![...arguments].slice(1).includes(el))

    // const filteredArr = [];
    // for (const el of arr) {
    //     if (!argsArr.includes(el)) {
    //         filteredArr.push(el)
    //     }
    // }
    // return filteredArr
    
}

const destroyerArrow = (...args) => args[0].filter(el => !args.slice(1).includes(el))

console.log(destroyer([1,2,3,1,2,3],2,3)) // [1,1]

console.log(destroyerArrow([1,2,3,1,2,3],2,3)) // [1,1]

