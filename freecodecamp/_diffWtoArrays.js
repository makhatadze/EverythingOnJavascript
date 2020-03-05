function diffArray(arr1, arr2) {
    const union = new Set([...arr1, ...arr2]);

    const sumDiff = [];
    
    for (const currentEl of union) {
        if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
            sumDiff.push(currentEl)
        } else if (arr2.includes(currentEl) && !arr1.includes(currentEl)) {
            sumDiff.push(currentEl)
        }
    }
    return sumDiff;

}

console.log(diffArray([1,2,3,3,4,5,6],[1,2,3,4,5])) //6


